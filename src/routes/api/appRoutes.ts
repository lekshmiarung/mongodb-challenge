import {Router} from 'express';
const router = Router();

import userRoutes from './userRoutes.js';

router.use('/apps', appRoutes);

