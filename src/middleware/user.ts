import type { Request, Response, NextFunction } from 'express';
import { db } from '../db/pg'
import { User } from '@types';
export const userData = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
	if (!req.session.user) {
		try {
			const result = await db.query<User[]>('SELECT * FROM users WHERE username=$1', ['johnny']);
			if (result[0] === undefined) {
				throw ("User not found!")
			}
			req.session.user = result[0];
		} catch (e) {
			return next(e)
		}
	}
	next();
}
