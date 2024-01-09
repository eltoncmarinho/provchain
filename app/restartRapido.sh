#!/bin/bash

echo "Liberando porta"
if lsof -t -i:8080; then
    kill -9 $(lsof -t -i:8080)
    echo ">> Porta 8080 liberada"    
else 
    kill -9 $(lsof -t -i:80)
    echo ">> Porta 80 liberada"    
fi  

echo "Subir aplicativo"

pushd /home/provchain/app/apiserver
    node apiserver.js &
    #nohup node apiserver.js &
popd     
#nohup node /home/provchain/app/apiserver/apiserver.js & 
#node /home/provchain/app/apiserver/apiserver.js &
