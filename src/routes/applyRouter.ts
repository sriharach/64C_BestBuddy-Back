import express from 'express';
import applyControllers from '../controllers/applyControllers'

const router = express.Router();
router.post('/ManageApply', applyControllers.ManageApply)

export default router;