import express from 'express';
import userRoutes from './user';
import errors from './errors';
const router = express.Router();

router.use('/user', userRoutes);

router.use(errors);

export default router;
