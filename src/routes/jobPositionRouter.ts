import express from 'express';
import jobPositionControllers from '../controllers/jobPositionControllers'

const router = express.Router();

/** เรียกข้อมูลตำแหน่งงานทั้งหมด */
router.post('/GetAllposition', jobPositionControllers.GetAllposition);
/** เพิ่มแก้ไขตำแหน่งงาน */
router.post('/ManagePosition', jobPositionControllers.ManagePosition);

router.get('/GetByIdPosition/:id', jobPositionControllers.GetByIdPosition);


export default router;