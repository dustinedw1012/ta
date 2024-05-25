#!/bin/bash

cd /opt/bitnami/projects/ta

export PATH=$PATH:/opt/bitnami/node/bin

echo "npm location: $(which npm)"
echo "node location: $(which node)"

echo "Current PATH: $PATH"

sudo chown -R bitnami:bitnami /opt/bitnami/projects/ta/
sudo chown -R bitnami:bitnami /opt/bitnami/node/lib/node_modules/

cd /opt/bitnami/projects/ta

npm --version

# Install dependencies
sudo npm install
sudo npm i express path fs
sudo npm install pm2@latest -g
