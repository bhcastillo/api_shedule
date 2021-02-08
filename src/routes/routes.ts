import { Router } from 'express';
import { getMark, getMarks, createMark, updateMark, deleteMark, notFound } from '../controllers/mark.controller';
import { createOrder } from '../controllers/orders.controller';
import { Shedule } from '../controllers/shedule.controller';

const shedule = new Shedule();
const router: Router = Router();

router.post('/order', createOrder);

router.get('/shedule', shedule.getShedule);
router.get('/shedule/generate', shedule.generateShedule);
router.get('/shedule/clear', shedule.clearShedule);

router.get('/mark', notFound);
router.get('/mark/:id', getMark);
router.get('/marks', getMarks);
router.post('/mark', createMark);
router.put('/mark/:id', updateMark);
router.delete('/mark/:id', deleteMark);
export default router;