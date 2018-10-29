FROM node:8-alpine

WORKDIR /app
COPY /src /app/src/.
COPY package.json /app/.
COPY pm-ash.sh /app/.

RUN npm install
RUN chmod +x /app/pm-ash.sh

ENTRYPOINT ["./pm-ash.sh"]