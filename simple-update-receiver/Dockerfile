from node:lts-alpine

ARG TOPIC

WORKDIR /app
ENV PORT=3000
ENV CHANNEL="${TOPIC}"
COPY ./package.json ./package.json
COPY ./client.ts ./client.ts
COPY ./redis.ts ./redis.ts
RUN npm i
EXPOSE 3000
RUN echo "Based on topic: ${TOPIC}"

CMD ["npm","run","start"]