FROM node:lts

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm rebuild bcrypt --build-from-source
COPY . .

CMD [ "npm", "run", "start:dev" ]