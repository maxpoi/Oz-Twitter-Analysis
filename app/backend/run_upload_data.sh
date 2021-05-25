#!/usr/bin/env bash

docker build -t upload_data -f upload_data/Dockerfile . 
docker run -d -p 8002:8002 --name upload_data upload_data
