FROM node:18.12.1-alpine

WORKDIR /server

COPY ./package.json .
RUN npm install

COPY . .

EXPOSE 8083

CMD npm start