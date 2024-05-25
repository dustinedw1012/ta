#!/bin/bash

# Stop the application server if it is running
echo "Stopping the application server..."
sudo systemctl stop your_application_service

# Backup current application files
echo "Backing up current application files..."
if [ -d /opt/bitnami/projects/ta ]; then
    sudo cp -r /opt/bitnami/projects/ta /opt/bitnami/projects/ta_backup_$(date +%F-%T)
fi

echo "before_install.sh script completed."