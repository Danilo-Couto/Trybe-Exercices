import { Router } from 'express';
import PostController from '../MSC/controller/post.controller';
import {validaPost} from '../middlewares/validapost.middleware';

const router = Router();

const postControler = new PostController();

router.get('/posts', postControler.getAll);
router.get('/posts/:id', postControler.getById);
router.post('/posts/', validaPost, postControler.create);
router.put('/posts/:id', postControler.update);
router.delete('/posts/:id', postControler.remove);

export default router;