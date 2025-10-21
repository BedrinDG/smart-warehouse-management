import request from "supertest";
import { app, httpServer } from "../server";

afterAll((done) => {
    httpServer.close(done); // корректно закрываем сервер после теста
});

describe("API example test", () => {
    it("GET / should return 200", async () => {
        const res = await request(app).get("/");
        expect(res.status).toBe(200);
        expect(res.text).toBe("Hello from Smart Warehouse backend!");
    });
});
