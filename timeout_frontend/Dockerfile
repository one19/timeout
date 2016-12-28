FROM node:6.9
MAINTAINER That idiot 0119 <maelstroswim@gmail.com>

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

WORKDIR /timeout_frontend

COPY ./package.json /timeout_frontend

RUN NODE_ENV=null $HOME/.yarn/bin/yarn install

ADD . /timeout_frontend
RUN ln -s .. node_modules/.root
RUN ln -s ../app node_modules/.app
RUN touch .env
