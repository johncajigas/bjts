import { describe, expect, test, it, vi } from "vitest";
import request from 'supertest';
import { app } from '../src/index';
describe("User actions", () => {
	it("User registration", async () => {
		const result = await request(app).post('/user/register').send({ username: 'test', password: '12345' });
		expect(result.statusCode).toBe(400);
		const failResult = await request(app).post('/user/register').send({ username: 'test' });
		expect(failResult.statusCode).toBe(400);
	});
	it("User login", async () => {
		const res = await request(app).post('/user/login').send({ username: 'test', password: '12345' })
		expect(res.statusCode).toBe(200)
	})
})
