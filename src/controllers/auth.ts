import type { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { db } from '../db/pg';

export const register = async (req: Request, res: Response, next: NextFunction) => {
	const hash = await bcrypt.hash(req.body.password, 10);
	try {
		const result = await db.query('INSERT INTO users (username,hash) VALUES ($1,$2) RETURNING *', [req.body.username, hash])
		if (!result.length) {
			throw ("User not found!")
		}
		res.sendStatus(200);
	} catch (e) {
		next(e)
	}


}
export const login = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const userByUsername = await db.query('SELECT * FROM users WHERE username=$1', [req.body.username]);
		if (!userByUsername?.length) {
			throw ("User not found")
		}
		const match = await bcrypt.compare(req.body.password, userByUsername[0].hash);

		if (!match) {
			throw ("Incorrect password");
		}
		req.session.user = userByUsername;
		res.sendStatus(200);
	} catch (e) {
		next(new Error(e as string));
	}
}
export const logout = async (req: Request, res: Response, next: NextFunction) => {

}


