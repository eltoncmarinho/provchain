#!/bin/bash

clear 

echo ">>>>> Início de Serviço - Criar canal e instalar nele o Contrato Inteligente"

export MSYS_NO_PATHCONV=1

set -e
starttime=$(date +%s)

# Remover as identidades das carteiras
rm -rf apiserver/wallet/*

#echo "Liberando porta"
if lsof -t -i:8080; then
    kill -9 $(lsof -t -i:8080)
    echo ">> Porta 8080 liberada"    
else 
    if lsof -t -i:80; then
        kill -9 $(lsof -t -i:80)
        echo ">> Porta 80 liberada"    
    fi    
fi  


echo ">>>>> Ajustando variáveis de ambiente"
# whereis go
export GOPATH=/usr/bin/go   
export PATH=$PATH:$GOPATH
export PATH=/home/provchain/bin:$PATH
export FABRIC_CFG_PATH=/home/provchain/config/

export RAIZ=/home/provchain

# Remover bloco genesis caso exista
if $RAIZ/app/fabric-samples/test-network/mychannel.block; then 
    pushd $RAIZ/app/fabric-samples/test-network/channel-artifacts/
        sudo rm mychannel.block
    popd    
fi   

# Remover package da chaincode caso exista
if $RAIZ/app/fabric-samples/test-network/provchain.tar.gz; then 
    pushd $RAIZ/app/fabric-samples/test-network/
        sudo rm provchain.tar.gz
    popd
fi

# Iniciar Rede e Blockchain
# lançamento da rede; criação de um canal e junção do nó ao canal
echo ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Tira a rede do ar, se estiver no ar..."
$RAIZ/app/fabric-samples/test-network/network.sh down
echo ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Cria o canal com banco de estado CouchDB"
$RAIZ/app/fabric-samples/test-network/network.sh up createChannel -ca -s couchdb
echo ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Instala a chaincode em todos os nós do canal mychannel. Aqui é o foco da PROVChain" 
CC_SRC_LANGUAGE=${1:-"javascript"}
CC_SRC_LANGUAGE=`echo "$CC_SRC_LANGUAGE" | tr [:upper:] [:lower:]`
CC_SRC_PATH="/home/provchain/chaincode/provchain/javascript/lib/"
$RAIZ/app/fabric-samples/test-network/network.sh deployCC -ccn provchain -ccv 1 -cci inicializarLivroRazao -ccl ${CC_SRC_LANGUAGE} -ccp ${CC_SRC_PATH}

# Habilitar usuarios e subir aplicativo
pushd $RAIZ/app/apiserver
    node enrollAdmin.js
    node registerUser.js
popd

pushd $RAIZ/app/apiserver
    #node apiserver.js 
    nohup node apiserver.js &
popd     

cat <<EOF
=====================================================================

Total setup execution time : $(($(date +%s) - starttime)) secs ...

=====================================================================

echo ">>>>> Fim de Serviço - Criar canal e instalar nele o Contrato Inteligente"
EOF
