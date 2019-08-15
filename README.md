# Let's Code
This is a leetcode-like Collaborative Online Coding Platform, which allows users to solve coding problems in teams and edit codes collabratively.

## Front end
Angular7

## Back end
* Built RESTful API using **Node.js** and **Express**
* Used **Docker** to emulate a Linux enviroment for user code execuating service
* Implementd an API for code execuating service with **Flask** 

## Demo
### *Collaborative Editing
![Collaborative editing](https://github.com/ShawnLi1014/CollaborativeOJ/blob/master/week4/demo/Collaborative%20editing.gif?raw=true)
### *Code Execuation
![Code Execuation](https://github.com/ShawnLi1014/CollaborativeOJ/blob/master/week4/demo/Code%20Execuation.gif?raw=true)

## How to have this project run on your computer
1. Have redis and Docker run on your computer
2. If you're on a Linux computer, just `sudo sh launcher.sh`  
   Otherwise:
   ```
      cd ./oj-server 
      npm install
      nodemon server.js 
      cd ../oj-client
      npm install
      cd ../executor
      pip2 install -r requirements.txt
      python2 executor_server.py 
   ```
