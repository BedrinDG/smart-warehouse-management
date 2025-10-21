// @ts-ignore
import Redis from "ioredis";

// @ts-ignore
export const redis = new Redis({
    host: "localhost",
    port: 6379,
});
