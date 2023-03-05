FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

COPY english-note-client/package*.json english-note-client/
RUN npm run install-client --only=production

COPY english-note-server/package*.json english-note-server/
RUN npm run install-server --only=production

COPY english-note-client/ english-note-client/
RUN npm run build --prefix english-note-client

COPY english-note-server/ english-note-server/

USER node

CMD [ "npm", "start", "--prefix", "english-note-server" ]

EXPOSE 8000