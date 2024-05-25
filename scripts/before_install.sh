#!/bin/bash

echo "Preparing for installation..."

find /opt/bitnami/projects/ta/ -name '.DS_Store' -type f -delete
sudo systemctl stop bitnami.service

echo "before_install.sh script completed."
