import express from 'express';
import { demoControllers, loginControllers, refreshTokenControllers } from '../controllers/authControllers';

const router = express.Router();

router.post('/login', loginControllers);
router.post('/refreshToken', refreshTokenControllers);

export default router;