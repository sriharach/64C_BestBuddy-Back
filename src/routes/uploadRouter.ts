import express from 'express';
import { uploads } from '../controllers/uploadControllers';

const router = express.Router();

router.post('/', uploads);

export default router;