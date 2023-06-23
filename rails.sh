#https://unix.stackexchange.com/questions/149419/how-to-check-whether-a-particular-port-is-open-on-a-machine-from-a-shell-script
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    kill -9 $(lsof -i:3000 -t)
    rm -f tmp/pids/server.pid
fi
clear
echo "rails server is starting ..."
rails s

