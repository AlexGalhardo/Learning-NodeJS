import { Router } from 'express';
// import { privateRoute } from '../config/passport';
import { privateRoute } from '../config/passport_jwt'


import * as ApiController from '../controllers/apiController';

const router = Router();

router.post('/register', ApiController.register);
router.post('/login', privateRoute, ApiController.login);

router.post('/loginJWT', privateRoute, ApiController.loginJWT);

router.get('/list', privateRoute, ApiController.list);

export default router;