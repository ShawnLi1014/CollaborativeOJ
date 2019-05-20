
fuser -k 3000/tcp
fuser -k 5000/tcp

sudo service redis_6397 start
cd ./oj-server
npm install
nodemon server.js &
cd ../oj-client
npm install
ng build --watch &
cd ../executor
pip2 install -r requirements.txt
python2 executor_server.py &

echo "===================================="
read -p "PRESS [ENTER] TO TERMINATE PROCESSES" PRESSKEY

fuser -k 3000/tcp
fuser -k 5000/tcp
sudo service redis_6397 stop
