const redisClient = require('../modules/redisClient');
const TIMEOUT_IN_SECONDS = 3600;

module.exports = function(io) {
    // collaboration sessions
    var collaborations = [];
    var socketIdToSessionId = [];

    const sessionPath = "/temp_sessions";

    io.on('connection', (socket) => {
        console.log(socket);
        let sessionId = socket.handshake.query['sessionId'];
        socketIdToSessionId[socket.id] = sessionId;
        console.log(socketIdToSessionId);
        // add socket id to corresponding collaboration session participants
        if(sessionId in collaborations) {
            collaborations[sessionId]['participants'].push(socket.id);
        } else {
            redisClient.get(sessionPath + '/' + sessionId, function(data) {
               if(data) {
                   console.log("previous session, pulling back from redis");
                   collaborations[sessionId] = {
                       'cachedChangeEvents': JSON.parse(data),
                       'participants': []
                   }
               } else {
                   console.log('creating new session');
                   collaborations[sessionId] = {
                       'cachedChangeEvents': [],
                       'participants' : []
                   };
               }
                collaborations[sessionId]['participants'].push(socket.id);
            });
        }

        socket.on('disconnect', function () {
            let sessionId = socketIdToSessionId[socket.id];
            console.log('socket ' + socket.id + 'disconnected.');

            if(sessionId in collaborations) {
                let participants = collaborations[sessionId]['participants'];
                let index = participants.indexOf(socket.id);
                if (index >= 0) {
                    participants.splice(index, 1);
                    if(participants.length === 0) {
                        console.log("last participant left. Storing in Redis");
                        let key = sessionPath + '/' + sessionId;
                        let value = JSON.stringify((collaborations[sessionId]['cachedChangeEvents']));
                        redisClient.set(key, value, redisClient.redisPrint);
                        redisClient.expire(key, TIMEOUT_IN_SECONDS);
                        delete collaborations[sessionId];
                    }
                }
            }
        });

        //socket event listeners
        socket.on('change', delta => {
            console.log('change ' + socketIdToSessionId[socket.id] + ' ' + delta);
            let sessionId = socketIdToSessionId[socket.id];
            if(sessionId in collaborations) {
                collaborations[sessionId]['cachedChangeEvents'].push(['change', delta, Date.now()]);
            }
            forwardEvents('change', delta);
        });

        socket.on('restoreBuffer', () => {
            let sessionId = socketIdToSessionId[socket.id];
            console.log('restoring buffer for session ' + sessionId + ', socket '+ socket.id);
            if(sessionId in collaborations) {
                let changeEvents = collaborations[sessionId]['cachedChangeEvents'];
                console.log(changeEvents);
                for(let i = 0; i < changeEvents.length; i++) {
                    socket.emit(changeEvents[i][0], changeEvents[i][1]);
                }
            }
        });

        // handle cursorMove events
        socket.on('cursorMove', cursor => {
            console.log('cursorMove ' + socketIdToSessionId[socket.id] + ' ' + cursor);
            // let sessionId = socketIdToSessionId[socket.id];
            cursor = JSON.parse(cursor);
            cursor['socketId'] = socket.id;
            let sessionId = socketIdToSessionId[socket.id];
            // if(sessionId in collaborations) {
            //     collaborations[sessionId]['cachedChangeEvents'].push(['cursorMove', cursor, Date.now()]);
            // }
            forwardEvents('cursorMove', cursor);
        });

        function forwardEvents(eventName, dataString) {
            let sessionId = socketIdToSessionId[socket.id];
            if(sessionId in collaborations) {
                let participants = collaborations[sessionId]['participants'];
                for(let i = 0; i < participants.length; i++) {
                    if (socket.id !== participants[i]) {
                        io.to(participants[i]).emit(eventName, dataString);
                    }
                }
            } else {
                console.log('WARNING: could not tie socket_id to any collaboration');
            }
        }
    })
};
