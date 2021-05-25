#!/usr/bin/env bash

. ./openrc.sh
ansible-playbook -i ./ansible/hosts ./ansible/deploy.yaml