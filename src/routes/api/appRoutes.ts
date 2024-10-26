import {Router} from 'express';
const router = Router();

import userRoutes from './userRoutes.js';
import thoughtRoutes from './thoughtRoutes.js';

router.use(userRoutes);
router.use(thoughtRoutes);

