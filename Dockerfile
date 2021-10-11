FROM node

WORKDIR /usr/sco

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 2222

CMD ["npm", "run", "dev"]