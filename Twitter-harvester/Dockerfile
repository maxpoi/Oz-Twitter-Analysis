# @author, Jiacheng Ye, 904973
# https://docs.docker.com/compose/gettingstarted/

FROM python:3.7-alpine

WORKDIR /test-twiiter-harvester

# install required dependencies for python
RUN apk add --no-cache gcc musl-dev linux-headers openssl-dev make

COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

EXPOSE 8001

COPY . .

CMD ["python", "harvest_by_city.py"]