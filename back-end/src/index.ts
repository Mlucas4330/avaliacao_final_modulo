import express, { NextFunction, Request, Response } from 'express';
import ejs from 'ejs';
import { listUser } from './data/User';
import cors from 'cors';
import path from 'path';
import { User } from './model/UserModel';
import { Tasks } from './model/TaskModel';
import { listTask } from './data/Task';
const app = express();

app.use(cors());
app.use(express.json());
app.set("view engine", 'ejs');



app.post('/', (req: Request, res: Response) => {
    try {
        const { name, pass } = req.body;

        if (!name) {
            res.status(403).send({
                ok: false,
                error: 'Name is required',
            });
        }

        if (!pass) {
            res.status(403).send({
                ok: false,
                error: 'Password is required',
            });
        }

        let exist = listUser.find(user => user.name === name);

        if (!exist) {
            res.status(404).send({
                ok: false,
                error: 'Account do not exist',
            });
        }

        res.status(200).send({
            ok: true,
            data: exist
        });
    } 
    catch (error: any) {
        res.status(500).send({
            ok: false,
            error: error,
        });
    }
});

app.post('/register', async (req: Request, res: Response) => {
    res.render('register');
    // try {
    //     const { name, pass, Rpass } = req.body;

    //     if (!name) {
    //         res.status(403).send({
    //             ok: false,
    //             error: 'Name is required',
    //         });
    //     };

    //     if (!pass) {
    //         res.status(403).send({
    //             ok: false,
    //             error: 'Password is required',
    //         });
    //     }

    //     if (!Rpass || pass !== Rpass) {
    //         res.status(403).send({
    //             ok: false,
    //             error: 'Password do not match',
    //         });
    //     }

    //     const exist = listUser.find(user => user.name === name);


    //     if (exist) {
    //         res.status(403).send({
    //             ok: false,
    //             error: 'Account already exist',
    //         });
    //     }

    //     const user = new User(name, pass);

    //     listUser.push(user);

    //     res.status(201).send({
    //         ok: true,
    //         data: user,
    //     });
    // } catch (error: any) {
    //     res.status(500).send({
    //         ok: false,
    //         error: error,
    //     });
    // }
});

// app.get('/:id_user/task', async (req: Request, res: Response) => {
//     // try {
//     //     res.render('home', {

//     //     });
//     // }
//     // catch (error: any) {
//     //     res.status(500).send({
//     //         ok: false,
//     //         error: error,
//     //     });
//     // }

//     // try {
//     //     const { id_user } = req.query;
//     //     const exist = listTask.map(task => task.id_user === id_user);

//     //     res.status(200).send({
//     //         ok: true,
//     //         message: "Tarefas recuperadas com sucesso",
//     //         data: exist,
//     //     });
//     // } catch (error: any) {
//     //     res.status(500).send({
//     //         ok: false,
//     //         error: error,
//     //     });
//     // }
// });

app.get('/user/tasks', (req: Request, res: Response) => {
    res.render('home')
    // try {
    //     const id_user = req.query;
    //     const { descricao, detalhamento } = req.body;

    //     if (!descricao) {
    //         res.status(403).send({
    //             ok: false,
    //             error: 'Description is required',
    //         });
    //     }

    //     if (!detalhamento) {
    //         res.status(403).send({
    //             ok: false,
    //             error: 'Details are required',
    //         });
    //     }


    //     const task = new Tasks(JSON.stringify(id_user), descricao, detalhamento);


    //     res.status(200).send({
    //         ok: true,
    //         message: "Tarefa criada com sucesso",
    //         data: task,
    //     });
    // } catch (error: any) {
    //     res.status(500).send({
    //         ok: false,
    //         error: error,
    //     });
    // }
});

app.listen(3505, () => {
    console.log("Running...");
});
