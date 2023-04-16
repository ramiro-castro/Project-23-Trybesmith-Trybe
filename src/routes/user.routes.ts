import { Router } from 'express';
import UserControllers from '../controllers/user.controllers';

const router = Router();

const userControllers = new UserControllers();

router.post('/', userControllers.create);

export default router;