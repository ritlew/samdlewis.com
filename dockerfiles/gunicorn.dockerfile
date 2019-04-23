FROM python:3.7.3-alpine3.9

COPY ./backend /app

WORKDIR /app

RUN pip install -r requirements.txt 

