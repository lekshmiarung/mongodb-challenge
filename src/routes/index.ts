import { Router } from 'express';
const router = Router();
import thoughtRoutes from './api/thoughtRoutes.js';
import userRoutes from './api/userRoutes.js';

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

export default router;
