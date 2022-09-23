import { Router } from 'express';
import UserController from '../controller/user.controller';
import validationUser from '../middlewares/user.middleware';

const router = Router();

const userControler = new UserController();

router.get('/users', userControler.getAll);
router.get('/users/:id', userControler.getById);
router.post('/users/', validationUser, userControler.create);
router.put('/users/:id', validationUser, userControler.update);
router.delete('/users/:id', userControler.remove);

export default router;