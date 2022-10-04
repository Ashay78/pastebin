FROM node:10 AS builder

WORKDIR /app/pastebin/front

COPY . .

RUN npm install
RUN npm run build
COPY . .
