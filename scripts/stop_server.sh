#!/bin/bash

echo "Stopping the application server..." | tee -a /opt/bitnami/projects/ta/logs/stop_server.log
sudo systemctl pm2-bitnami.service || { echo 'Failed to stop my-node-app' | tee -a /opt/bitnami/projects/ta/logs/stop_server.log; exit 1; }
echo "Application stopped." | tee -a /opt/bitnami/projects/ta/logs/stop_server.log