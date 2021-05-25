#!/usr/bin/env bash

docker build -t harvester -f crawler/crawl_raw_data/node_3/Dockerfile .
docker run -d -p 8001:8001 --name harvester harvester