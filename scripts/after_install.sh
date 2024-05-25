#!/bin/bash

cd /opt/bitnami/projects/ta

export PATH=$PATH:/opt/bitnami/node/bin

echo "npm location: $(which npm)"
echo "node location: $(which node)"

echo "Current PATH: $PATH"

cd /opt/bitnami/projects/ta

npm --version

# Install dependencies
npm install
npm i express path fs
npm install pm2@latest -g
