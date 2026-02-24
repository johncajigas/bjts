import express, { type Request, type Response } from 'express'
import { userData } from '../middleware/user';
import { register, login } from '../controllers/auth';
import { validateUserForm } from '../middleware/validators';

const router = express.Router();
router.get("/me", userData, (req: Request, res: Response) => {
	res.json({
		user: req.session.user,
	});
});
router.post("/register",
	express.json(),
	validateUserForm,
	register
)
router.post("/login",
	express.json(),
	validateUserForm,
	login
)
export default router;
