FROM node:10.16.3-alpine

RUN mkdir -p /app/client
WORKDIR /app/client

COPY package.json /app/client
COPY package-lock.json /app/client

RUN npm install

COPY . /app/client

ARG PORT
ENV PORT=4000

EXPOSE 4000

CMD ["npm", "start"]