# @team 35
# @author Jiacheng Ye   904973      Shanghai, China
# @author Shiyi Xu      780801      Melbourne, Australia
# @author Yuyao Ma      1111182     Yinchuan, China
# @author Yujing Guan   1011792     Fuzhou, China
# @author Zexin Yu      10328021    Dalian, China

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
