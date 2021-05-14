# @author, Jiacheng Ye, 904973

from os.path import dirname, abspath


PROJECT_FOLDER = "COMP90024-Assignment-2"


def find_root_folder(project_folder=PROJECT_FOLDER):
    '''
    output: the root_folder of this project
    '''
    print(project_folder)
    parent_dir = abspath(__file__)
    while parent_dir[-len(project_folder):] != project_folder:
        parent_dir = dirname(parent_dir) 

    return parent_dir 
