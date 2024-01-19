#!/bin/bash

#https://hyperledger-fabric.readthedocs.io/en/release-2.5/install.html
#ssh-keygen -f "/home/elton/.ssh/known_hosts" -R "89.117.33.155"


#Limpar a tela
clear

echo ">>>>> Início de Serviço - Instalar Pré-requisitos"

echo ">>>>> Instalando npm"
if which npm; then
    which npm 
else     
    sudo apt install npm
    npm install -g npm@latest
fi    
echo ">> npm --version" && npm --version

echo " "
echo ">>>>> Instalando curl"
if which curl; then
    which curl
else 
    sudo apt-get install curl
fi    
echo ">> curl --version" && curl --version

echo " "
echo ">>>>> Instalando GO" 
if which go; then
    which go
else    
    sudo apt -y install golang-go
fi
echo ">> go version" && go version

echo " "
echo ">>>>> Instalando nvm"
if which nvm; then
    which nvm
else     
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
    #As vezes é necessário sair e voltar do terminal para as configurações surtirem efeito
    #nvm ls-remote
    nvm install 20.10.0
fi    
echo ">> nvm --version" && nvm --version

# Softwares auxiliares
echo " "
echo ">>>>> Instalando nodejs"
if which nodejs; then 
    which nodejs
else     
    apt install -y ca-certificates curl gnupg
    mkdir -p /etc/apt/keyrings
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
    NODE_MAJOR=20
    ARCH=amd64
    echo "deb [arch=$ARCH signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
    apt update
    sudo apt install nodejs -y
fi
echo ">> nodejs --version" && nodejs --version
echo ">> node --version" && node --version



echo " "
echo ">>>>> Instalando jq"
if which jq; then
    which jq
else     
    sudo apt install jq
fi    

echo " "
echo ">>>>> Removendo instalaçãoes docker, caso hajam"
if which docker; then
    which docker
else
    systemctl stop docker
    docker rmi -f $(docker images -q)
    sudo apt remove docker-compose
    sudo apt update 
    sudo apt upgrade
    sudo apt autoremove
fi

echo " "
echo ">>>>> Instalando docker"
sudo apt -y install docker
sudo apt -y install docker-compose
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -a -G docker root

echo ">>>>> Instalando fabric-samples & images"
sudo curl -sSL https://bit.ly/2ysbOFE | bash -s -- 2.4.0 1.5.2

echo " "
echo ">>>>> Ajustando variáveis de ambiente"
export RAIZ=/home/provchain/
export GOPATH=$(which go)   
export PATH=$PATH:$GOPATH
export PATH=$RAIZ/bin:$PATH
export FABRIC_CFG_PATH=$RAIZ/config/

sudo apt update 
sudo apt upgrade

clear
echo ">>>>>>>> Verificando pré-requisitos >>>>>>>>>>>>>>>>>>"
echo ">> curl --version" && curl --version
echo ">> nodejs --version" && nodejs --version
echo ">> node --version" && node --version
echo ">> npm --version" && npm --version
echo ">> docker --version: " && docker --version
echo ">> docker-compose --version: " && docker-compose --version
echo ">> go version" && go version
echo ">> nvm --version" && nvm --version
echo ">> npm --version" && npm --version
echo ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"

echo ">>>>> Fim de Serviço - Instalar Pré-requisitos"
