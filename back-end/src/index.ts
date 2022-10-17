import express, { Request, Response } from 'express';
import cors from 'cors';
import { UserRepository } from './repository/UserRepository';
import { AddUser } from './services/User/AddUser';
import { AddTask } from './services/Tasks/AddTasks';
import { User } from './model/UserModel';
const app = express();

app.use(cors());
app.use(express.json());

app.post('/user/login', async (req: Request, res: Response) => {
    const { name, pass } = req.body;
    const listUserRepository = new UserRepository();
    
    try {
        if (!name) throw new Error('Name is required');

        if (!pass) throw new Error('Password is required');

        const exist = listUserRepository.getUser(name) == null ? true : false;

        if(!exist) throw new Error('Account do not exist');
              
        res.status(200).send({
            ok: true,
            message: "Login Sucessfull",
        });
    } catch (error: any) {
        res.status(404).send({
            ok: false,
            error: error.toString(),
        });
    }
});

app.post('/user/register', async (req : Request, res: Response) => {
    const { name, pass, Rpass } = req.body;
    const listUserRepository = new UserRepository();
    const addUser = new AddUser;

    try {
        if (!name) throw new Error('Name is required');

        if (!pass) throw new Error('Password is required');

        if (!Rpass || pass !== Rpass) throw new Error('Password do not match');

        let exist = listUserRepository.getUserByName(name);
      
        if(exist) throw new Error('Account already exist');

        const user = addUser.addUser(name, pass, Rpass);

        res.status(202).send({
            ok: true,
            data: user,
        });
    } catch (error: any) {
        res.status(403).send({
            ok: false,
            error: error.toString(),
        });
    }
});

app.get('/user/:id_user/tasks/', async (req : Request, res : Response) => {
    const id_user = req.params.query;
    const userRepository = new UserRepository();
    const tanksRepository = new UserRepository();
    const user = userRepository.getUser(id_user);
    const task = new AddTask();

    try {


        
    } catch (error) {
        
    }
});

app.get('/user/:id_user/tasks/:id')

app.post('/user/:id_user/tasks/', async (req : Request, res: Response) => {
    const id_user = req.params.query;
    const { detail, created_at, updated_at } = req.body;
    const userRepository = new UserRepository();
    const addTask = new AddTask();
 
    try {
        const task = addTask.addTask(id_user, detail, created_at, updated_at);
    } catch (error : any) {
        res.status(403).send({
            ok: false,
            error: error.toString(),
        });
    }
});

app.put('/user/:id_user/tasks/:id')

app.delete('/user/:id_user/tasks/:id')

app.get

app.get


app.listen(3001, () => {
    console.log("running");
});
