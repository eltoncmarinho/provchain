#!/bin/bash

clear 

echo " "
echo ">>>>> Início de Serviço - Instalar Módulos"

pushd /home/provchain/app/apiserver
    sudo npm init 
    sudo npm install express --save 
    sudo npm install handlebars --save 
    sudo npm install express-handlebars --save 
    sudo npm install express-session --save 
    sudo npm install jquery --save 

    sudo npm install connect-flash --save 
    sudo npm install ipware --save 
    sudo npm install geoip-lite --save 
    sudo npm install uuid --save

    sudo npm install navigator --save 
    sudo npm install ip --save 

    sudo npm install fabric-ca-client --save
    sudo npm install fabric-network --save

    #npm install -g nodemon

    sudo npm install @popperjs/core --save

    sudo npm install bootstrap --save
popd 

pushd /home/provchain/app/apiserver/public/
    sudo npm install @popperjs/core --save
    sudo npm install bootstrap --save
popd

apt update 
apt upgrade

echo ">>>>> Fim de Serviço - Instalar Módulos"
