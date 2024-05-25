#!/bin/bash

export PATH=$PATH:/opt/bitnami/node/bin

echo "pm2 location: $(which pm2)"

echo "Current PATH: $PATH"

cd /opt/bitnami/projects/ta

pm2 start index.js --name sato-jabar

# Save the PM2 process list
pm2 save

# Generate PM2 startup script
pm2 startup systemd -u bitnami --hp /opt/bitnami

# Set PM2 to start on boot
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u bitnami --hp /opt/bitnami

# Start the PM2 service
sudo systemctl start bitnami.service

# Reload PM2 process list and start the application
pm2 reload all
