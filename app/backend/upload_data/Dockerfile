# @author, Jiacheng Ye, 904973
# https://docs.docker.com/compose/gettingstarted/
# run this file in /backend/ directory, with "docker build -f upload_data/Dockerfile .""
# or docker build -t upload -f upload_data/Dockerfile . && docker run -d upload --name="upload"

FROM python:3.7-alpine

WORKDIR /upload_data

# install required dependencies for python
RUN apk add --no-cache gcc musl-dev linux-headers openssl-dev make

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

EXPOSE 8002

RUN mkdir utils/

COPY ./upload_data/ .
COPY ./utils/ utils/
COPY ./couchdb_config.py .

CMD ["python", "input_data_from_files.py"]