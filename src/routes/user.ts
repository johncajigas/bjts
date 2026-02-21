import express, { type Request, type Response } from 'express'
import { userData } from '../middleware/user';
import { register } from '../controllers/auth';
import { validateRegistrationForm } from '../middleware/validators';

const router = express.Router();
router.get("/me", userData, (req: Request, res: Response) => {
	res.json({
		user: req.session.user,
	});
});
router.post("/register",
	express.json(),
	validateRegistrationForm,
	register
)
export default router;
