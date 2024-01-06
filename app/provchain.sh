#!/bin/bash

clear 

echo "=====>>> instalarprovchain.sh"

export MSYS_NO_PATHCONV=1

set -e
starttime=$(date +%s)
echo ">>>>> Início de Serviço " 

# Remover as identidades das carteiras
rm -rf apiserver/wallet/*

# liberar porta 8080
if lsof -t -i:8080; then
    kill -9 $(lsof -t -i:8080)
else 
    echo ">> Porta 8080 estava liberada"    
fi    

export RAIZ=/home/provchain/

# Remover bloco genesis caso exista
if $RAIZ/test-network/channel-artifacts/mychannel.block; then 
    rm -f $RAIZ/test-network/channel-artifacts/mychannel.block
fi   

# Remover package da chaincode caso exista
if $RAIZ/test-network/provchain.tar.gz; then 
    rm -f $RAIZ/test-network/provchain.tar.gz
fi

# Iniciar Rede e Blockchain
# lançamento da rede; criação de um canal e junção do nó ao canal
echo ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Tira a rede do ar, se estiver no ar..."
$RAIZ/test-network/network.sh down
echo ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Cria o canal com banco de estado CouchDB"
$RAIZ/test-network/network.sh up createChannel -ca -s couchdb
echo ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Instala a chaincode no canal e nos nós. Aqui é o foco da PROVChain" 
CC_SRC_LANGUAGE=${1:-"javascript"}
CC_SRC_LANGUAGE=`echo "$CC_SRC_LANGUAGE" | tr [:upper:] [:lower:]`
CC_SRC_PATH="../chaincode/provchain/javascript/"
$RAIZ/test-network/network.sh deployCC -ccn provchain -ccv 1 -cci inicializarLivroRazao -ccl ${CC_SRC_LANGUAGE} -ccp ${CC_SRC_PATH}

# Habilitar usuarios e subir aplicativo
pushd $RAIZ/app/apiserver
    node enrollAdmin.js
    node registerUser.js
    node apiserver.js &
    #nohup node apiserver.js &
popd     

cat <<EOF
=====================================================================

Total setup execution time : $(($(date +%s) - starttime)) secs ...

=====================================================================

echo ">>>>> Fim de Serviço"
EOF
