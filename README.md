# COMP90024-Assignment-2
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/maxpoi"><img src="https://avatars.githubusercontent.com/u/27168274?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jiacheng Ye</b></sub></a><br /><a href="https://github.com/maxpoi/COMP90024-Assignment-2/commits?author=maxpoi" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Ma-Yuyao"><img src="https://avatars.githubusercontent.com/u/69780852?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ma-Yuyao</b></sub></a><br /><a href="https://github.com/maxpoi/COMP90024-Assignment-2/commits?author=Ma-Yuyao" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/cc1032802"><img src="https://avatars.githubusercontent.com/u/62432272?v=4?s=100" width="100px;" alt=""/><br /><sub><b>cc1032802</b></sub></a><br /><a href="https://github.com/maxpoi/COMP90024-Assignment-2/commits?author=cc1032802" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jxstar11"><img src="https://avatars.githubusercontent.com/u/73589480?v=4?s=100" width="100px;" alt=""/><br /><sub><b>jxstar11</b></sub></a><br /><a href="https://github.com/maxpoi/COMP90024-Assignment-2/commits?author=jxstar11" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/YUJGUAN"><img src="https://avatars.githubusercontent.com/u/64241998?v=4?s=100" width="100px;" alt=""/><br /><sub><b>YUJGUAN</b></sub></a><br /><a href="https://github.com/maxpoi/COMP90024-Assignment-2/commits?author=YUJGUAN" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Project structure
Note: The structur of ***app*** and ***ATwitter-API-Interfaces*** are to be determined later.

> The ansible folder uses the Ansible playbook folder strucure. 
> If a *templates* folder exists (like in *ansible/roles/deploy/couchdb*), then a J2 template is used to generate required files.
> J2 template is required because some files need to use the Ansible inventory variables.


```
.
├── ansible                             # The folder of all ansible scripts (for setting up & deploy server)
│   ├── roles                           # The ansible roles folder, listing all the tasks
│   │   ├── deploy                      # where all the deploy tasks are listed 
│   │   │   └── couchdb                 #
│   │   │   │   ├── tasks               # 
│   │   │   │   │   └── main.yaml       # 
│   │   │   │   └── templates           #
│   │   │   │       └── xxx.xxx.j2      # 
│   │   ├── openstack                   # where all the setting up MRC tasks are listed 
│   │   │   ├── ...                     # ⬆
│   │   │   └── remove                  # where all the uninstall server tasks are listed
│   │   │   │   ├── ...                 # ⬆
│   │   │   │   └── ...                 # ⬆
│   │   └── set-up                      # where all the setting up each individual instance server tasks are listed
│   │   │   ├── ...                     # ⬆
│   │   │   └── ...                     # ⬆
│   ├── vars                            # A folder listing all used Ansible environment variables
│   ├── hosts                           # A customized Ansible inventory file; passed into playbook by using -i command
│   ├── main.yaml                       # The main Ansible playbook file. It uses all the roles except the ones in the remove folder
│   └── uninstall_server.yaml           # If this playbook is run, all MRC instances, security groups, volumes will be removed
├── app                                 # The folder for the actual application
│   ├── backend                         # 
│   │   ├── api                         # 
│   │   ├── crawler                     #
│   │   └── mapreduce                   # 
│   └── frontend                        # 
├── Twitter-API-Interfaces              # 
├── .all-contributorsec                 # Automate generated file by all-contributor plugin
├── openrc.sh                           # An environment set up bash file; used in run.sh
├── run.sh                              # The main shell script. Must be run at the very start
└── README.md
```


## How to run?
  1. Open up a ***new terminal***
  1. Open ansible/hosts
      1. change *ansible_ssh_private_key_file* to your private key path
  4. Connect AnyConnet
  5. In terminal, run *"sh ./run.sh"*
    
