#!/bin/bash

#https://hyperledger-fabric.readthedocs.io/en/release-2.5/install.html
#ssh-keygen -f "/home/elton/.ssh/known_hosts" -R "89.117.33.155"


#Limpar a tela
clear

echo "=====>>> instalarprequisitos.sh"

#Instalando curl
apt install curl

apt update

#Instalando nvm
apt install build-essential checkinstall libssl-dev
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
#As vezes é necessário sair e voltar do terminal para as configurações surtirem efeito
#Instalando nvm
#nvm ls-remote
nvm install 20.10.0

#Instalando nodejs"
apt update
apt install -y ca-certificates curl gnupg
mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
NODE_MAJOR=20
ARCH=amd64
echo "deb [arch=$ARCH signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
apt update
apt install nodejs -y

# Instalando npm
npm install -g npm@latest

echo ">>>>> Atualizando a versão baixada do fabric-samples"

#Instalando docker
apt install docker
apt install docker-compose

#Instalando docker versao 2.1.1 1.4.7
#mkdir -p /usr/local/lib/docker/cli-plugins
#curl -SL https://github.com/docker/compose/releases/download/v2.1.1/docker-compose-linux-x86_64 -o /usr/local/lib/docker/cli-plugins/docker-compose
#chmod +x /usr/local/lib/docker/cli-plugins/docker-compose


#Instalando fabric-samples & images
curl -sSL https://bit.ly/2ysbOFE | bash -s -- 2.4.0 1.5.2
#curl -sSL https://bit.ly/2ysbOFE | bash -s -- 2.1.1 1.4.7 0.4.20

systemctl start docker
systemctl enable docker
usermod -a -G docker root

#Instalando GO 
#snap install go  --classic
#rm -rf /usr/local/go 
#tar -C /usr/local -xzf /home/go1.21.5.linux-amd64.tar.gz

apt -y install golang-go

#Instalando jq
apt install jq

export RAIZ=/home/provchain/

echo ">>>>> Ajustando variáveis de ambiente"
whereis go
export GOPATH=/usr/bin/go   #Alterar de acordo com a instalação do GO
export PATH=$PATH:$GOPATH
export PATH=$RAIZ/bin:$PATH
export FABRIC_CFG_PATH=$RAIZ/config/

#Atualização
nvm install 20.10.0

apt update 
apt upgrade

clear

echo ">>>>>>>> Verificando pré-requisitos >>>>>>>>>>>>>>>>>>"
echo ">> curl --version" && curl --version
echo ">> nvm --version" && nvm --version
echo ">> nodejs --version" && nodejs --version
echo ">> node --version" && node --versionexport PATH=$PATH:$GOPATH
echo ">> npm --version" && npm --version
echo ">> docker --version: " && docker --version
echo ">> docker-compose --version: " && docker-compose --version
echo ">> go version" && go version
echo ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"

echo ">>>>> Fim de Serviço"
