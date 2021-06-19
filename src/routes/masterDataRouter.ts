import express from 'express';
import masterDataControllers from '../controllers/masterDataControllers';

const router = express.Router();

router.get('/GetmasterPrefix', masterDataControllers.GetmasterPrefix);

export default router;