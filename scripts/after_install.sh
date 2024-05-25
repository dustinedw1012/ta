#!/bin/bash

# Set permissions for the application files
echo "Setting permissions for application files..."
sudo chown -R bitnami:bitnami /opt/bitnami/projects/ta
sudo chmod -R 755 /opt/bitnami/projects/ta

echo "after_install.sh script completed."