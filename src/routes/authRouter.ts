import express from 'express';
import authControllers from '../controllers/authControllers';

const router = express.Router();

router.get('/login', authControllers.login);

export default router;