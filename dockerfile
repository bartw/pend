FROM node:latest
RUN mkdir /app
WORKDIR /app
COPY ./package.json /app/package.json
COPY ./index.js /app/index.js
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]