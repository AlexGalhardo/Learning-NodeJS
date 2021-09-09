import { Router } from 'express';
import { Auth } from '../middlewares/auth';
import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/ping', ApiController.ping);

router.post('/register', ApiController.register);
router.post('/login', ApiController.login);

router.get('/list', Auth.private, ApiController.list);

export default router;