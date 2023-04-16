import { Router } from 'express';
import UserControllers from '../controllers/user.controllers';

const router = Router();

const userControllers = new UserControllers();

// router.get('/', productControllers.getAll);
router.post('/', userControllers.create);

export default router;