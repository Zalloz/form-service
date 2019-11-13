#!/bin/bash
cd ~
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.35.1/install.sh | bash
exec bash
nvm install node
sudo yum install git
exec bash
git clone https://github.com/Zalloz/form-service.git
cd form-service
npm i
chmod u+x installRedisReplica.sh
./installRedisReplica.sh
cd ~