#!/usr/bin/env bash

exec docker build -t app -f frontend/Dockerfile . && docker run -d app --name="app"
