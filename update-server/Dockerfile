from node:lts-alpine

WORKDIR /app
ENV PORT=3000
COPY ./package.json ./package.json
COPY ./server.ts ./server.ts
COPY ./redis.ts ./redis.ts
RUN npm i
EXPOSE 3000


CMD ["npm","run","serve"]