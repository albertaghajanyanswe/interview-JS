FROM node

WORKDIR /app

# для кэша пакетов, если изменение было в коде не в пакетах то будет работать кэш и npm install небудет вновь работать
COPY package.json /app

# worked during creating image
RUN npm install

# worked every time when running image
#CMD ["npm", "install"]

COPY . .

ENV PORT 4000

# which port shuold be available from outside
EXPOSE $PORT

CMD ["node", "index.js"]
