FROM node:latest

ENV NODE_ENV production

RUN mkdir -p /app
WORKDIR /app

COPY package*.json yarn.lock ./
RUN yarn install --production

COPY . .
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
