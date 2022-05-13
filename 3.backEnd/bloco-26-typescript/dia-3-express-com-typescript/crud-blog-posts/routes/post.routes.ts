import { Router } from 'express';
import PostController from '../MSC/controller/post.controller';
import {validaPostCreate, validaPostEdit} from '../middlewares/validapost.middleware';

const router = Router();

const postControler = new PostController();

router.get('/search', postControler.getBySearchTerm);
router.get('/:id', postControler.getById);
router.put('/:id', validaPostEdit, postControler.update);
router.delete('/:id', postControler.remove);
router.get('/', postControler.getAll);
router.post('/', validaPostCreate, postControler.create);

export default router;