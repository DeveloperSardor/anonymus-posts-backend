import Router from 'express';
import { UserContr } from '../controllers/user.js';

const router = Router();


router.post(`/register`, UserContr.register);
router.post(`/login`, UserContr.login);

export default router;