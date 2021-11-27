FROM node:alpine

RUN mkdir -p /home/leitglxn/test_back && chown -R node:node /home/leitglxn/test_back

WORKDIR /home/leitglxn/test_back

COPY package.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3001