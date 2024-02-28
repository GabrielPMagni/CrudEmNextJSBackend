FROM node:20

WORKDIR /app

COPY package*.json ./

RUN yarn global add @nestjs/cli

COPY . .

RUN yarn

EXPOSE 8080

CMD ["yarn", "start:dev"]
