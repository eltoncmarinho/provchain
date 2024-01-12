#!/bin/bash

clear 

echo ">>>>> Início de Serviço - Instalar Módulos"

pushd /home/provchain/app/apiserver
    npm init 
    npm install express --save 
    npm install handlebars --save 
    npm install express-handlebars --save 
    npm install express-session --save 
    npm install jquery --save 

    npm install connect-flash --save 
    npm install ipware --save 
    npm install geoip-lite --save 
    npm install uuid --save

    npm install navigator --save 
    npm install ip --save 

    npm install fabric-ca-client --save
    npm install fabric-network --save

    #npm install -g nodemon

    npm install @popperjs/core --save

    npm install bootstrap --save
popd 

pushd /home/provchain/app/apiserver/public/
    npm install @popperjs/core --save
    npm install bootstrap --save
popd

apt update 
apt upgrade

echo ">>>>> Fim de Serviço - Instalar Módulos"
