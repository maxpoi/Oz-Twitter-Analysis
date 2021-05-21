# @author, Jiacheng Ye, 904973

FROM python:3.7-alpine

WORKDIR /app

ENV http_proxy http://wwwproxy.unimelb.edu.au:8000/
ENV https_proxy http://wwwproxy.unimelb.edu.au:8000/
ENV HTTP_PROXY http://wwwproxy.unimelb.edu.au:8000/
ENV HTTPS_PROXY http://wwwproxy.unimelb.edu.au:8000/
ENV no_proxy localhost,127.0.0.1,localaddress,172.16.0.0/12,.melbourne.rc.nectar.org.au,.storage.u nimelb.edu.au,.cloud.unimelb.edu.au

ENV FLASK_APP=./frontend/app.py
ENV FLASK_EVN=production

# install required dependencies for python
RUN apk add --no-cache gcc musl-dev linux-headers openssl-dev make curl

COPY ./frontend/requirements.txt requirements.txt
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8003

CMD ["flask", "run", "--host", "0.0.0.0", "-p", "8003"]