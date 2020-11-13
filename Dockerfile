FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN sed -i "s/mongodb:\/\/localhost/mongodb:\/\/mongo/g" common/services/mongoose.service.js

RUN npm install

EXPOSE 3600

CMD ["npm", "run", "start"]
