#!/bin/bash

sudo mkdir /opt/bitnami/projects
sudo chown $USER /opt/bitnami/projects
git clone https://github.com/dustinedw1012/ta.git
cd /opt/bitnami/projects.ta
cd ta
npm install
npm i express path fs
npm install forever -g
forever start index.js

sudo cp /opt/bitnami/projects/ta/vhosts/sample-vhost.conf /opt/bitnami/apache/conf/vhosts/
sudo cp /opt/bitnami/projects/ta/vhosts/sample-https-vhost.conf /opt/bitnami/apache/conf/vhosts/

sudo /opt/bitnami/ctlscript.sh restart apache

