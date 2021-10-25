import { Router } from 'express';

import * as todoController from '../controllers/todoController';

const router = Router();

router.get('/all', todoController.all);

router.post('/create', todoController.add);

router.put('/update/:id', todoController.update);

router.delete('/remove/:id', todoController.remove);

export default router;