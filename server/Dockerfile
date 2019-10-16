FROM node:10.16.3-alpine

RUN mkdir -p /app/server
WORKDIR /app/server

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . /app/server

ENV APP_SERVER_PORT=8000

EXPOSE 8000

CMD ["npm", "run", "start"]