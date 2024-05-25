#!/bin/bash

echo "Preparing for installation..." | tee -a /opt/bitnami/projects/ta/logs/before_install.log

sudo systemctl stop pm2-bitnami.service

echo "before_install.sh script completed." | tee -a /opt/bitnami/projects/ta/logs/before_install.log