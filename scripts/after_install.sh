#!/bin/bash

echo "Setting permissions..." | tee -a /opt/bitnami/projects/ta/logs/after_install.log
sudo chown -R bitnami:bitnami /opt/bitnami/projects/ta
sudo chmod -R 755 /opt/bitnami/projects/ta
echo "after_install.sh script completed." | tee -a /opt/bitnami/projects/ta/logs/after_install.log