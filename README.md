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

> The ansible folder uses the Ansible playbook folder strucure. 
> If a *templates* folder exists (like in *ansible/roles/deploy/couchdb*), then a J2 template is used to generate required files.
> J2 template is required because some files need to use the Ansible inventory variables.


```
.
├── ansible                              # The folder of all ansible scripts (for setting up & deploy server)
│   ├── roles                            # The ansible roles folder, listing all the tasks
│   │   ├── deploy                       # where all the deploy tasks are listed 
│   │   │   └── couchdb                  #
│   │   │   │   ├── tasks                # 
│   │   │   │   │   └── main.yaml        # 
│   │   │   │   └── templates            #
│   │   │   │       └── xxx.xxx.j2       # 
|   |   |   ├── app                      # 
|   |   |   |   └── ...                  #
|   |   |   ├── copy-directory           #
|   |   |   |   └── ...                  #
|   |   |   ├── harvester                #
|   |   |   |   └── ...                  #
│   │   ├── openstack                    # where all the setting up MRC tasks are listed 
│   │   │   ├── ...                      # ⬆
│   │   │   └── remove                   # where all the uninstall server tasks are listed
│   │   │   │   ├── ...                  # ⬆
│   │   │   │   └── ...                  # ⬆
│   │   └── set-up                       # where all the setting up each individual instance server tasks are listed
│   │   │   ├── ...                      # ⬆
│   │   │   └── ...                      # ⬆
│   ├── vars                             # A folder listing all used Ansible environment variables
│   ├── hosts                            # A customized Ansible inventory file; passed into playbook by using -i command
│   ├── main.yaml                        # The main Ansible playbook file. It uses all the roles except the ones in the remove folder
│   └── uninstall_server.yaml            # If this playbook is run, all MRC instances, security groups, volumes will be removed
├── app                                  # The folder for the actual application
│   ├── backend                          # The folder containing all back-end codes
│   │   ├── api                          # The folder containing all api provided to the front-end
|   |   |   ├── get_aurin.py             # Define & realize APIs for getting AURIN data
|   |   |   └── get_map_reduce_result.py # Define & realize APIs for getting map_reduce data
│   │   ├── crawler                      # The folder containing Twitter Harvester codes
|   |   |   ├── crawl_by_keyword         # The folder containing Twitter Harvester codes for crawling by keyword
|   |   |   |   ├── 5G                   # The folder containing Twitter Harvester codes for crawling for 5G scenario
|   |   |   |   |   ├── ...              # ⬆
|   |   |   |   |   └── ...              # ⬆
|   |   |   |   ├── AFL                  # The folder containing Twitter Harvester codes for crawling for AFL scenario
|   |   |   |   |   ├── ...              # ⬆ 
|   |   |   |   |   └── ...              # ⬆
|   |   |   |   ├── food                 # The folder containing Twitter Harvester codes for crawling for food scenario
|   |   |   |   |   ├── ...              # ⬆
|   |   |   |   |   └── ...              # ⬆
|   |   |   |   └── vaccine              # The folder containing Twitter Harvester codes for crawling for vaccine scenario
|   |   |   |   |   ├── ...              # ⬆
|   |   |   |   |   └── ...              # ⬆
|   |   |   ├── crawl_by_raw_data        # The folder containing Twitter Harvester codes for crawling any keywords
|   |   |   |   ├── node_1               # The folder containing Twitter Harvester codes for crawling any keywords hosted on node_1
|   |   |   |   |   ├── Dockerfile       # ⬆
|   |   |   |   |   └── ...              # ⬆
|   |   |   |   ├── node_2               # The folder containing Twitter Harvester codes for crawling any keywords hosted on node_2
|   |   |   |   |   ├── Dockerfile       # ⬆
|   |   |   |   |   └── ...              # ⬆
|   |   |   |   └── node_3               # The folder containing Twitter Harvester codes for crawling any keywords hosted on node_3
|   |   |   |   |   ├── Dockerfile       # ⬆
|   |   |   |   |   └── ...              # ⬆
|   |   |   └── twitter_api_config.py    # The file is to set Twitter API configuration information
│   │   └── mapreduce                    # The folder containing CouchDB map_reduce codes
|   |   |   └── map_reduce.py            # The file is to set map_reduce for CouchDB
|   |   |── upload_data                  # The folder containing Uploading data to CouchDB codes
|   |   |   |── AURIN                    # The folder containing AURIN data (.json) we needed for this project
|   |   |   |   └── ...                  # ⬆
|   |   |   |── AURIN-CSV                # The folder containing AURIN data (.csv) we needed for this project
|   |   |   |   └── ...                  # ⬆
|   |   |   |── Dockerfile               #
|   |   |   |── input_data_from_files.py # The file is to input data into CouchDB
|   |   |   └── requirements.txt         # 
|   |   |── utils                        # The folder containing until functions
|   |   |   |── get_path.py              # The file is to get the path
|   |   |   └── sentiment_analysis.py    # The file is to perform sentiment analysis
|   |   |── couchdb_config.py            # The file is to set CouchDB configuration information
|   |   |── requirements.txt             #
|   |   |── run_node_1.sh                #
|   |   |── run_node_2.sh                #
|   |   |── run_node_3.sh                #
|   |   └── run_upload_data.sh           #
│   └── frontend                         # 
|   |   |── Dockerfile                   #
|   |   └── ...                          #
├── .all-contributorsec                  # Automate generated file by all-contributor plugin
├── openrc.sh                            # An environment set up bash file; used in run.sh
├── run_first.sh                         # The main shell script. Must be run at the very start
├── run_last.sh                          # The main shell script. Must be run at the very end
└── README.md
```

## How to run?
Before running the shell scripts, there are couple preparations must be done first.
1.	Go to your MRC dashboard, download the OpenRC file by clicking your profile icon and choose download.
2.	Rename the downloaded file to “*openrc.sh*” and move it under the root project folder.
3.	Navigate to “*Key Pairs*” under “*Project – Compute*” and create a new key pair by clicking “Create Key Pair”. 
4.	Fill in key name and choose key type as “*SSH Key*”. 
5.	Save the downloaded *.pem* file to a directory where you can easily navigate to. (Warning! **DO NOT** share this key pair with anyone or public it!!!)
6.	Open file “*hosts*” under *./ansible/*, after “*ansible_ssh_private_key_file*” append the *absolute path* to this .pem file you just downloaded.
7.	Open file “*mrc.yaml*” under *./ansible/vars/*, after field “*instance: key_name:*”, replace the old key name by the key name you just created.
8.	Click “User” on the top right and click “Setting”
9.	Navigate to “Reset Password”
10.	Click “Reset Password” and write down the new password somewhere safe. You will need to enter this password later when running the shell scripts.
11.	*[Optional]* Open “*mrc.yaml*” file again, and decrease the “*vol_size*” if there no 500 GB storage available in your project space.

After that, you can run the shell scripts following the following instructions to run Ansible.
1)	cd to the project folder
2)	in your terminal, enter “*sh ./run_first.sh*” (or simply double-click the “*run_first.sh*” file)
3)	Terminal will ask you to enter password, which is the password from step 9 previously.
4)	Copy the smallest IP address. By smallest we need numerically smallest, for example, 172.0.0.0 < 172.0.0.1
5)	Then open file “*couchdb_config.py*” under *./app/backend/*, replace all strings “172.xxx.xxx.xxx” with the smallest IP address you just copied. 
6)	(Make sure you are still at the project root folder in your terminal) enter “*sh ./run_last.sh*” and enter the same password again.
7)	When this script finishes, app is up on the cloud and can be accessed by entering the smallest IP address in step 4 followed by “:8003”. For example, “172.168.123.43:8003”. Make sure you are using The University of Melbourne’s network as well.

Note: Here assume the project space in MRC is empty. If not, uncomment the second line in “*run_first.sh*” first before running it. 

## Project specification
Look at the specification pdf.
