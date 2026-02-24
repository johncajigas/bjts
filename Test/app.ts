import { describe, expect, test, it, vi } from "vitest";
import request from "supertest";
import { db } from "../src/db/pg";
import { app } from "../src/index";
describe("App setup and basic connections", () => {
	it("Environment variables", async () => {
		expect(process.env.port).ok
		expect(process.env.DBNAME).ok
		expect(process.env.DBPASSWORD).ok
		expect(process.env.DBPORT).ok
		expect(process.env.DBHOST).ok
	})
	it("Database connection", async () => {
		db.connect().then((client) => {
			expect(client.client.readyForQuery).toBe(true)
		})
	})
	it("Node server and database", async () => {
		const res = await request(app).get("/user/me").send();
		expect(res.statusCode).toBe(200);
		expect(res.body).toHaveProperty("user");
		expect(res.body.user.username).toBe('johnny');
	});
	it("Error handling on the node server", async () => {
		const res = await request(app).get("/test");
		expect(res.statusCode).toBe(403);
	})
});
