import { connect } from "./redis";
const channel = "football";
const start = async () => {
  const redis = await connect();

  redis.subscribe(channel, (err, count) => {
    console.log({ err, count });
  });
  console.log(`listening to ${channel}....`);
  redis.on("message", (channel, msg) => {
    console.log({ channel, msg });
  });
};

start();
