import { Router } from 'express';
import OrdersControllers from '../controllers/orders.controllers';

const router = Router();

router.get('/', OrdersControllers.getAll);

export default router;