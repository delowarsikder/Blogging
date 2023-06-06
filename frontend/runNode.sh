#!/bin/sh
clear
if lsof -Pi :3002 -sTCP:LISTEN -t >/dev/null ; then  
  kill -9 $(lsof -i:3002 -t) 
fi
echo "node is starting"
npm start
