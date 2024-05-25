#!/bin/bash

echo "Preparing for installation..."

sudo systemctl stop bitnami.service
sudo rm -rf /opt/bitnami/projects/ta/*

echo "before_install.sh script completed."
