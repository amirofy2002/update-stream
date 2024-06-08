import * as Redis from "ioredis";

export const connect = async () => {
  const redisClient = new Redis.Redis(6379, "0.0.0.0");

  return redisClient;
};
