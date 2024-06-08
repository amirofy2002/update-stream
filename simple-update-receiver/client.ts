import { connect } from "./redis";
import express from "express";
import { randomUUID } from "crypto";
const subscriptionMap: Record<string, string[]> = {};

const defaultTopic = process.argv[2] ?? process.env.CHANNEL ?? "UNKNOWN";
const channel = defaultTopic;
const startReceiver = async () => {
  const redis = await connect();

  redis.subscribe(channel, (err, count) => {
    console.log({ err, count });
  });
  console.log(`listening to ${channel}....`);
  redis.on("message", (channel, msg) => {
    console.log({ channel, msg });
  });
};
const startServer = () => {
  const app = express();
  app.get("/subscribe/:topic", (req, res) => {
    const topic = req.params["topic"];
    const client = randomUUID();
    addSubscription(client, topic);
    res.json({
      succeeded: true,
      subscribed: true,
      topic,
      yourId: client,
    });
  });
  app.listen(3002, "0.0.0.0");
};

const addSubscription = (id: string, topic: string) => {
  const clients = subscriptionMap[topic];
  if (!clients) subscriptionMap[topic] = [];
  subscriptionMap[topic].push(id);
};

startReceiver();
startServer();
