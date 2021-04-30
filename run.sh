#!/usr/bin/env bash

. ./openrc.sh
ansible-playbook -i ./ansible/hosts ./ansible/uninstall_server.yaml
ansible-playbook -i ./ansible/hosts ./ansible/main.yaml