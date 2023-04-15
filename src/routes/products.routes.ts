import { Router } from 'express';
import ProductControllers from '../controllers/product.controllers';

const router = Router();

const productControllers = new ProductControllers();

router.get('/', productControllers.getAll);
router.post('/', productControllers.create);

export default router;
