import * as Redis from "ioredis";
const PORT = process.env.REDIS_PORT ?? process.env.redis_port ?? 6379;
const HOST = process.env.REDIS_HOST ?? process.env.redis_host ?? "0.0.0.0";
export const connect = async () => {
  const redisClient = new Redis.Redis(+PORT, HOST);

  return redisClient;
};
