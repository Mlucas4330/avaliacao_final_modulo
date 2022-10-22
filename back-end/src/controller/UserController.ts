import { Request, Response } from "express";
import { listUser } from "../data/User";
import { User } from "../model/UserModel";
import { UserRepository } from "../repository/UserRepository";
import { UserAdd } from "../services/User/UserAdd";

export class UserController {
    static Index(req : Request, res : Response){
        try {
            const userRepo = new UserRepository();
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
    
            let user = userRepo.getUser(name);
    
            if (!user) {
                res.status(404).send({
                    ok: false,
                    error: 'Account do not exist',
                });
            }
    
            res.status(200).send({
                ok: true,
                message: "Login successfully",
                data: user,
            });
        } 
        catch (error: any) {
            res.status(500).send({
                ok: false,
                error: error.toString(),
            });
        }
    }

    static acaoSalvar(req : Request, res : Response){
        try {
            const { name, pass, Rpass } = req.body;
            const userRepo = new UserRepository();
            const userAdd = new UserAdd();
    
            if (!name) {
                res.status(403).send({
                    ok: false,
                    error: 'Name is required',
                });
            };
    
            if (!pass) {
                res.status(403).send({
                    ok: false,
                    error: 'Password is required',
                });
            }
    
            if (!Rpass || pass !== Rpass) {
                res.status(403).send({
                    ok: false,
                    error: 'Password do not match',
                });
            }
    
            let exist = userRepo.getUser(name);
    
    
            if (exist) {
                res.status(403).send({
                    ok: false,
                    error: 'Account already exist',
                });
            }
    
            const user = userAdd.make(name, pass)

            res.status(201).send({
                ok: true,
                message: 'Account created successfully',
                data: user,
            });
    
        } catch (error: any) {
            res.status(500).send({
                ok: false,
                error: error,
            });
        }
    }
}