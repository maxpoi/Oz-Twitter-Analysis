# @team 35
# @author Jiacheng Ye   904973      Shanghai, China
# @author Shiyi Xu      780801      Melbourne, Australia
# @author Yuyao Ma      1111182     Yinchuan, China
# @author Yujing Guan   1011792     Fuzhou, China
# @author Zexin Yu      10328021    Dalian, China
# https://docs.docker.com/compose/gettingstarted/
# run this file in /backend/ directory, with "docker build -f upload_data/Dockerfile .""
# or docker build -t upload -f upload_data/Dockerfile . && docker run -d upload --name="upload"

FROM python:3.7-alpine

WORKDIR /crawler

ENV http_proxy http://wwwproxy.unimelb.edu.au:8000/
ENV https_proxy http://wwwproxy.unimelb.edu.au:8000/
ENV HTTP_PROXY http://wwwproxy.unimelb.edu.au:8000/
ENV HTTPS_PROXY http://wwwproxy.unimelb.edu.au:8000/
ENV no_proxy localhost,127.0.0.1,localaddress,172.16.0.0/12,.melbourne.rc.nectar.org.au,.storage.u nimelb.edu.au,.cloud.unimelb.edu.au


# install required dependencies for python
RUN apk add --no-cache gcc musl-dev linux-headers openssl-dev make

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY ./crawler/crawl_raw_data/node_3/ .
COPY ./couchdb_config.py .
COPY ./crawler/twitter_api_config.py .

EXPOSE 8001

CMD ["python", "harvest_by_locations_node_3.py"]