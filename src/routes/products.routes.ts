import { Router } from 'express';
import ProductControllers from '../controllers/product.controllers';

const router = Router();

router.get('/', ProductControllers.getAll);
router.post('/', ProductControllers.create);

export default router;
