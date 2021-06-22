import express from 'express';
import jobPositionControllers from '../controllers/jobPositionControllers'

const router = express.Router();

/** เรียกข้อมูลตำแหน่งงานทั้งหมด */
router.post('/GetAllposition', jobPositionControllers.GetAllposition);
/** เพิ่มแก้ไขตำแหน่งงาน เปลี่ยนสถานะ*/
router.post('/ManagePosition', jobPositionControllers.ManagePosition);
/** เรียกข้อมูลด้วย id */
router.get('/GetByIdPosition/:id', jobPositionControllers.GetByIdPosition);
/** ลบข้อมูล */
router.post('/DelDataPosition', jobPositionControllers.DelDataPosition);


export default router;