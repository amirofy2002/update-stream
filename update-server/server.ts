console.log("Update receiver server started....");
import * as express from "express";
import { randomUUID } from "crypto";
import { connect } from "./redis";
import { Redis } from "ioredis";

const PORT = process.env.PORT || process.env.port || 3000;

let redisClient: Redis | null = null;
async function start() {
  redisClient = await connect();
  const app = express.default();
  app.get("/webhook", (req, res) => {
    const id = randomUUID();
    console.log(`a new webhook received ${id}`);

    publishUpdate(id, "football");
    return res.json({ succeeded: true, id });
  });
  app.listen(+PORT, "0.0.0.0");
}

start();

function publishUpdate(id: string, topic: string) {
  redisClient?.publish(topic, JSON.stringify({ id, topic }));
}
