import { Router } from 'express';
import LoginControllers from '../controllers/login.controllers';

const router = Router();

router.post('/', LoginControllers.login);

export default router;