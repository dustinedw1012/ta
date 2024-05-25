#!/bin/bash

echo "Validating the service..." | tee -a /opt/bitnami/projects/ta/logs/validate_service.log
curl -f http://localhost:4000 || { echo 'Service validation failed' | tee -a /opt/bitnami/projects/ta/logs/validate_service.log; exit 1; }
echo "Service is running." | tee -a /opt/bitnami/projects/ta/logs/validate_service.log