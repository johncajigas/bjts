import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();

router.use((err: Error, _req: Request, res: Response, next: NextFunction): void => {
	console.error(err.stack);
	if (err) {
		res.status(500).send('Oops! That did not work!')
	}
	next();
});
router.all('/*splat', (_req: Request, res: Response, _next: NextFunction) => {
	return res.status(403).send("oh fuck");
});

export default router;
