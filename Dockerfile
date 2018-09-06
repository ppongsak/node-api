FROM node:9.3.0

ENV PORT 3000

ENV NODE_ENV production

COPY . /src

WORKDIR /src

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]