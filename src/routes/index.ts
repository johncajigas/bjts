import express, { type ErrorRequestHandler } from 'express';
import { DatabaseError } from 'pg';
import userRoutes from './user';
const router = express.Router();
const errorMsgMap: Record<string, string> = {
	'already exists': 'Username already exists. Please choose another.',
};

const parseDBErrorMsg = (err: DatabaseError): string | undefined => {
	for (const key in errorMsgMap) {
		if ((err.detail as string).includes(key)) {
			return errorMsgMap[key];
		}
	}
}
const errorHandler: ErrorRequestHandler = (err, _req, res, next) => {
	if (err) {
		let error = "Unknown error"
		if (err instanceof DatabaseError) {
			const dbError = parseDBErrorMsg(err);
			if (dbError) {
				error = dbError
			}
		} else if (err.message) {
			error = err.message;
		}

		return res.status(err.statusCode || 400).send({ success: false, error });
	}
	next();
};

router.use('/user', userRoutes);
router.use(errorHandler)

export default router;
