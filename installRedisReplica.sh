#!/bin/bash
cd ~
sudo yum -y install gcc make # install GCC compiler
cd /usr/local/src
sudo wget http://download.redis.io/redis-stable.tar.gz
sudo tar xvzf redis-stable.tar.gz
sudo rm -f redis-stable.tar.gz
cd redis-stable
sudo make distclean
sudo make
sudo yum install -y tcl
sudo make test
sudo cp src/redis-server /usr/local/bin/
sudo cp src/redis-cli /usr/local/bin/
cd /usr/local/src/redis-stable
sudo cp ~/form-service/redis.conf /etc/redis.conf
cd ~