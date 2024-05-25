#!/bin/bash

# Navigate to the application directory
cd /opt/bitnami/projects/ta

# Install dependencies
npm install
npm i express path fs
npm install pm2@latest -g
