# stage: 1
FROM node:8 as react-build
RUN mkdir /app
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package-lock.json /app/package-lock.json
COPY package.json /app/package.json

COPY . /app

RUN npm install

# start app
CMD ["npm", "start"]
