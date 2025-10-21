// @ts-ignore
import Queue from "bull";
// @ts-ignore
import { redis } from "../redis";

const exampleQueue = new Queue("example-queue", {
    redis: { host: "localhost", port: 6379 },
});

// Добавление задачи
exampleQueue.add({ task: "update_inventory" });

// Обработка задачи
exampleQueue.process(async (job) => {
    console.log("Processing job:", job.data);
});
