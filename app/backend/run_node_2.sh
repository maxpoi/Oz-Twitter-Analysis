#!/usr/bin/env bash

exec docker build -t harvester -f crawler/crawl_raw_data/node_2/Dockerfile . && docker run -d harvester --name="harvester"
