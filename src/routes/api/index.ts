import { Router } from 'express';
const router = Router();
import thoughtRoutes from './thoughtRoutes.js';
import userRoutes from './userRoutes.js';

//router.use('/apps', appRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

export default router;
