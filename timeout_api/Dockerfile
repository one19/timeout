FROM node:6.9
MAINTAINER That idiot 0119 <maelstroswim@gmail.com>

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

WORKDIR /timeout_api
COPY ./package.json /timeout_api

RUN NODE_ENV=null $HOME/.yarn/bin/yarn install

ADD . /timeout_api
RUN touch /timeout_api/.env
