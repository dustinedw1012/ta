#!/bin/bash

echo "Starting the application server..." | tee -a /opt/bitnami/projects/ta/logs/start_server.log
sudo systemctl start pm2-bitnami.service || { echo 'Failed to start my-node-app' | tee -a /opt/bitnami/projects/ta/logs/start_server.log; exit 1; }
echo "Application started." | tee -a /opt/bitnami/projects/ta/logs/start_server.log