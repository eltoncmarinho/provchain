#!/bin/sh

sudo su

apt update
add-apt-repository ppa:git-core/ppa 
apt update
apt install git

apt install python3-pip
apt install graphviz
pip3 install selenium
pip3 install pydot 
pip3 install webdriver-manager
pip3 install prov
pip3 install pandas
pip3 install numpy
pip3 install openpyxl

apt update
apt upgrade

#Instalando Chrome
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
dpkg -i google-chrome-stable_current_amd64.deb
apt install -f

