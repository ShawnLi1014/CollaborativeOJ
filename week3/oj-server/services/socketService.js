module.exports = function(io) {
    // collaboration sessions
    var collaborations = [];
    var socketIdToSessionId = [];

    io.on('connection', (socket) => {
        console.log(socket);
        let sessionId = socket.handshake.query['sessionId'];
        socketIdToSessionId[socket.id] = sessionId;

        // add socket id to corresponding collaboration session participants
        if(!(sessionId in collaborations)) {
            collaborations[sessionId] = {
                'participants' : []
            };
        }
        collaborations[sessionId]['participants'].push(socket.id);

        //socket event listeners
        socket.on('change', delta => {
            console.log('change ' + socketIdToSessionId[socket.id] + ' ' + delta);
            forwardEvents('change', delta);
        });
        // handle cursorMove events
        socket.on('cursorMove', cursor => {
            console.log('cursorMove ' + socketIdToSessionId[socket.id] + ' ' + cursor);
            // let sessionId = socketIdToSessionId[socket.id];
            cursor = JSON.parse(cursor);
            cursor['socketId'] = socket.id;
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
