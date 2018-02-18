FROM node:6.9.5

RUN mkdir -p /opt/bin
WORKDIR /opt/app

RUN npm install -g yarn && yarn global add webpack && yarn

CMD tail -f /dev/null
