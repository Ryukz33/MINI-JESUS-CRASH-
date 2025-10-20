FROM node:lts-buster
RUN git clone https://github.com/Dawensboytech/MINI-JESUS-CRASH-/root/Dawensboytech
WORKDIR /root/Dawensboytech
RUN npm install && npm install -g pm2 || yarn install --network-concurrency 1
COPY . .
EXPOSE 9090
CMD ["npm", "start"]
