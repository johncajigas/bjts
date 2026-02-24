import express, { type Response, type Request, type NextFunction } from "express";
import { pgSession } from './middleware/session';
import routes from './routes/index';
export const app = express();
const port = process.env.PORT;
app.use(pgSession);

app.use(routes);
app.all('/*splat', (_req: Request, res: Response, _next: NextFunction) => {
	return res.sendStatus(403);
});
app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
