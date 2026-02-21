import type { Request, Response, NextFunction } from 'express';
import { getByUserName } from '../db/user'
export const userData = async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
	if (!req.session.user) {
		try {
			const user = await getByUserName('johnny');
			if (!user) {
				throw ("Could not get user")
			}
			req.session.user = user;

		} catch (e) {
			return next(e)
		}
	}
	next();
}
