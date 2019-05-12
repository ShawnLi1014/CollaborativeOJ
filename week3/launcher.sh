
fuser -k 3000/tcp

brew services restart redis
cd ./oj-server
npm install
nodemon server.js &
cd ../oj-client
npm install
ng build --watch



echo "===================================="
read -p "PRESS [ENTER] TO TERMINATE PROCESSES" PRESSKEY

fuser -k 3000/tcp
brew services stop redis
