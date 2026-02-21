import type { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';
const errorHandler = (req: Request, res: Response, next: NextFunction) => {
	const result = validationResult(req);
	if (result.isEmpty()) {
		next();
	} else {
		res.status(400).send({ errors: result.array() });
	}
};

export const validateRegistrationForm = [
	body('username').notEmpty(),
	body('password').notEmpty(),
	errorHandler
];
