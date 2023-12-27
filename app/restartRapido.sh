#!/bin/bash

export RAIZ=/home/provchain
echo $RAIZ

echo "Liberando porta 8080"
kill -9 $(lsof -t -i:8080)

echo "Subir aplicativo"
pushd $RAIZ/app/apiserver
    node apiserver.js & 
    #nohup node apiserver.js &
popd     
