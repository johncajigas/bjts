import express from "express";
import { pgSession } from './middleware/session';
import routes from './routes/index';
export const app = express();
const port = process.env.PORT;

app.use(pgSession);

app.use(routes);

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
