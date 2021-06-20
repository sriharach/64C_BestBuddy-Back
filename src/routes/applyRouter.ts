import express from 'express';
import applyControllers from '../controllers/applyControllers'

const router = express.Router();

/** เพิ่มแก้ไข สมัครงาน */
router.post('/ManageApply', applyControllers.ManageApply);

export default router;