#!/bin/bash

# Start the PM2 service
sudo systemctl start pm2-bitnami.service

# Reload PM2 process list and start the application
pm2 reload all