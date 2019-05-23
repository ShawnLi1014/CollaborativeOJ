#!/bin/bash
fuser -k 3000/tcp
fuser -k 5000/tcp

service redis_6379 start
cd ./oj-server
npm install
nodemon server.js &
cd ../oj-client
npm install
#ng build --prod --build-optimizer &
cd ../executor
pip2 install -r requirements.txt
python2 executor_server.py &
