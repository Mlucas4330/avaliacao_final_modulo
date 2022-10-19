import express, { Request, Response } from 'express';
import UserController from '../controller/UserController';

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
    new UserController().index(req, res);  
});

router.post('/register', (req: Request, res: Response) => {
    new UserController().register(req, res);
});

// router.get('/:id_user/tasks/', User.getAll);

// router.get('/:id_user/tasks/:id', User.getOne);

// router.post('/:id_user/tasks/', User.add);

// router.put('/:id_user/tasks/:id', User.update);

// router.delete('/:id_user/tasks/:id', User.update);

// router.get('/teste', User.archive);

// router.get('/teste2', User.exemple);

export default router;