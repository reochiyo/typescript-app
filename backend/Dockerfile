FROM node:lts

RUN apt-get update && apt-get install -y curl

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY ./backend/package*.json ./

RUN npm install -g npm@latest

RUN rm -rf node_modules

RUN npm install 

CMD ["npm", "run", "dev"]