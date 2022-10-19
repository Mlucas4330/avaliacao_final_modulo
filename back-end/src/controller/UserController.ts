import { Request, Response } from 'express';
import { UserRepository } from '../repository/UserRepository';
import { AddTask } from '../services/Tasks/AddTasks';
import { AddUser } from '../services/User/AddUser';

class UserController {
    public index(req: Request, res: Response) {
        const listUserRepository = new UserRepository();

        try {
            const { name, pass } = req.body;

            if (!name) {
                throw new Error('Name is required');
            }

            if (!pass) {
                throw new Error('Password is required');
            }

            const exist = listUserRepository.getUser(name) == null ? true : false;

            if (!exist) {
                throw new Error('Account do not exist');
            }

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
    }
    public register(req: Request, res: Response) {
        try {
            const { name, pass, Rpass } = req.body;
            const listUserRepository = new UserRepository();
            const addUser = new AddUser;

            if (!name) throw new Error('Name is required');

            if (!pass) throw new Error('Password is required');

            if (!Rpass || pass !== Rpass) throw new Error('Password do not match');

            let exist = listUserRepository.getUserByName(name);

            if (exist) throw new Error('Account already exist');

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
    }
    // public async getAll(req: Request, res : Response){
    //     const id_user = req.params.query;
    //     const userRepository = new UserRepository();
    //     const tanksRepository = new UserRepository();
    //     const user = userRepository.getUser(id_user);
    //     const task = new AddTask();

    //     try {



    //     } catch (error) {

    //     }
    // }
    // public async getOne(req: Request, res : Response){

    // }
    // public async add(){

    // }
    // public update(){

    // }
    // public delete(){

    // }
    // public archive(){

    // }
    // public exemple(){

    // }
}

export default UserController