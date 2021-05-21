#!/usr/bin/env bash

sudo docker build -t app -f frontend/Dockerfile . 
sudo docker run -d -p 8003:8003 --name app app
