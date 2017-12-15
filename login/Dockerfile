FROM node:8.9.3

RUN mkdir /app
WORKDIR /app/src

COPY package.json /app

RUN npm install && npm install -g nodemon

COPY . /app/src

EXPOSE 3000
CMD ["npm", "start"]
