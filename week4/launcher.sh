
fuser -k 3000/tcp
fuser -k 5000/tcp

brew services restart redis
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
brew services stop redis
