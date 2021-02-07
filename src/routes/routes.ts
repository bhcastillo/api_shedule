import { Router } from 'express';
import { getMark, getMarks, createMark, updateMark, deleteMark, notFound } from '../controllers/mark.controller';
import { getShedule } from '../controllers/shedule.controller';

const router: Router = Router();

router.get('/shedule', getShedule);

router.get('/mark', notFound);
router.get('/mark/:id', getMark);
router.get('/marks', getMarks);
router.post('/mark', createMark);
router.put('/mark/:id', updateMark);
router.delete('/mark/:id', deleteMark);
export default router;