FROM node:alpine as builder

WORKDIR /frontend

COPY ./package.json /frontend

RUN npm install

COPY . .

RUN npm run build

FROM nginx
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf