#!/bin/bash

echo "Preparing for installation..."

sudo systemctl stop bitnami.service
shopt -s dotglob
sudo rm -rf /opt/bitnami/projects/ta/*
sudo rm -rf /opt/bitnami/projects/ta/.* || true

echo "before_install.sh script completed."
