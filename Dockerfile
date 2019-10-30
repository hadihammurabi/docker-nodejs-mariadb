FROM mhart/alpine-node

WORKDIR /opt/app
COPY package.json .
RUN npm install

COPY . .
