import { Router } from 'express';
import productsController from '../controller/productsController';

const router = Router();

router.post('/', productsController.create);

export default router; 