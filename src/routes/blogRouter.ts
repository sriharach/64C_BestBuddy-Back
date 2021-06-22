import express from 'express';
import blogControllers from '../controllers/blogControllers'
import authenticateToken from '../middleware/authenticateToken'

const router = express.Router();

/** เพิ่มแก้ไข สมัครงาน */
router.post('/manageBlog', [authenticateToken], blogControllers.manageBlogControllers);

/**  เรัยกข้อมูล Blog หรือ กิจกรรม หน้าเว็บ */
router.get('/getAllDataBlog', blogControllers.getAllDataBlogControllers);

/**  เรียกข้อมูล By id  หลังบ้าน */
router.get('/getByIdBlog/:id', [authenticateToken], blogControllers.getByIdBlogControllers);

/**  เลบข้อมูล */
router.get('/delBlog/:id', [authenticateToken], blogControllers.delBlogControllers);

/**  แก้ไข Isuse */
router.get('/editStatus/:id/:status', [authenticateToken], blogControllers.editStatusControllers);

export default router;