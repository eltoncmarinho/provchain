# PROVChain - Prova de conceito da arquitetura

<b>PROVA DE CONCEITO do Hyperledger Fabric no dominio de solos</b><p>

Para executar este modelo siga os seguintes passos para instalação local ou VPS:<br>

#1 - No Terminal de sua máquina baixe os arquivos abaixo  <br>
#	- https://github.com/twbs/bootstrap/releases/download/v5.1.3/bootstrap-5.1.3-dist.zip <br>
#	- https://go.dev/dl/go1.17.7.linux-amd64.tar.gz <br> 
#
#1.1 - Colocá-los um nível acima do diretório que você escolheu (no meu caso, estou transferindo para uma VPS)<br>
#
#		Do Linux para a VPS
#		scp /home/elton/Downloads/bootstrap-5.1.3-dist.zip root@<<ip vps>>:/home
#		scp /home/elton/Downloads/go1.21.5.linux-amd64.tar.gz root@<<ip vps>>:/home 
#
#		Do Windows para a VPS
#		scp C:\Users\elton\Downloads\bootstrap-5.1.3-dist.zip root@<<ip vps>>:/home
#		scp C:\Users\elton\Downloads\go1.21.5.linux-amd64.tar.gz root@<<ip vps>>:/home
#
2 - Entrar na VPS<br>
	ssh \<\<conta\>\>@\<\<ip vps\>\>
	
3 - Instalat o GIT ( sudo apt-get update && sudo add-apt-repository ppa:git-core/ppa && sudo apt update; apt install git )

4 - Ir para o diretório /home e entrar em modo root (sudo -su) <br>
  
5 - Baixar do gitHub, em diretório a sua escolha, <br>
  git clone https://github.com/eltoncmarinho/blockchain.git <br>
    
6 - Dentro desse diretório vá para blockchain/provchain/apiserver e ajuste o endereço da url ( <<ip vps>> ) em <i>apiserver.js</i> e a porta de acesso ( <<porta>> ).
7 - Suba um nível para se posicionar em <b>blockchain/provchain/</b><br>
  
8 - executar os scripts abaixo na seguinte ordem<br>
<ul>
<li> <b>./instalarprerequisitos.sh</b>:somente na primeira execução - como o próprio nome diz, instala os arquivos, módulos e softwares necessários para instalação da rede.
<li> <b>./instalarbase.sh</b>:somente na primeira execução - instala a base da rede da prova de conceito.
<li> <b>./instalarexemplos.sh</b>:inicializa a rede provChain e a coloca disponível para acesso.
</ul>

9 - Acesse no browser a página http://<b>endereco da url em apiserver.js</b><br>
  http://\<\<ip vps\>\>:\<\<porta\>\>


 
