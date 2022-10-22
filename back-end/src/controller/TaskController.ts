import { Request, Response } from "express";
import { listTask } from "../data/Task";
import { listUser } from "../data/User";
import { Tasks } from "../model/TaskModel";
import { TaskRepository } from "../repository/TaskRepository";
import { TaskAdd } from "../services/Task/TaskAdd";
import { TaskDelete } from "../services/Task/TaskDelete";

export class TaskController {
    static getAll(req: Request, res: Response){
        try {
            const { id_user } = req.params;
            const taskRepo = new TaskRepository();
            const tasks_por_user = taskRepo.getTaskPorUser(id_user);
    
            res.status(200).send({
                ok: true,
                message: "Tarefas recuperadas com sucesso",
                data: tasks_por_user,
            });
        } catch (error: any) {
            res.status(500).send({
                ok: false,
                error: error,
            });
        }
    };
    
    static getOne(req: Request, res: Response){
        try {
            const { id_user, id } = req.params;
            const taskRepo = new TaskRepository();
    
            const task_por_user = taskRepo.getOneTaskPorUser(id_user, id)

            if(!task_por_user){
                res.status(404).send({
                    ok: false,
                    error: 'Task not found',
                });
            }
            res.status(200).send({
                ok: true,
                message: "Tarefa recuperada com sucesso",
                data: task_por_user,
            });
        } catch (error: any) {
            res.status(500).send({
                ok: false,
                error: error,
            });
        }
    };
    
    static acaoSalvar(req: Request, res: Response){
        try {
            const { descricao, detalhamento } = req.body;
            const { id_user } = req.params;
            const taskService = new TaskAdd();
    
            if (!descricao) {
                res.status(403).send({
                    ok: false,
                    error: 'Description is required',
                });
            };
    
            if (!detalhamento) {
                res.status(403).send({
                    ok: false,
                    error: 'Details are required',
                });
            }

            const obj = {
                id_user: id_user,
                descricao: descricao,
                detalhamento: detalhamento
            }

            const user = taskService.make(obj);

            if(user == 'User not found'){
                res.status(404).send({
                    ok: false,
                    error: 'User not found',
                });
            }
    
            res.status(201).send({
                ok: true,
                message: 'Task added successfully',
                data: user,
            });
    
        } catch (error: any) {
            res.status(500).send({
                ok: false,
                error: error,
            });
        }
    }
    
    static editar(req: Request, res: Response){
        try {
            const { id_user, id } = req.params;
            const { descricao, detalhamento } = req.body;
    
            if (!descricao) {
                res.status(403).send({
                    ok: false,
                    error: 'Description is required',
                });
            };
    
            if (!detalhamento) {
                res.status(403).send({
                    ok: false,
                    error: 'Details are required',
                });
            }
    
            const tasks_por_user = listTask.filter(task => task.id_user == id_user);
    
            const task_por_user = tasks_por_user.find(task => task.id == id);
    
            if(task_por_user){
                task_por_user.description = descricao;
                task_por_user.detail = detalhamento;
            }
            else {
                res.status(404).send({
                    ok: false,
                    error: 'Task not found',
                });
            }
    
            res.status(200).send({
                ok: true,
                message: "Tarefa recuperada com sucesso",
                data: task_por_user,
            });
        } catch (error: any) {
            res.status(500).send({
                ok: false,
                error: error,
            });
        }
    };
    
    static deletar(req: Request, res: Response){
        try {
            const { id_user, id } = req.params;
            const taskRepo = new TaskRepository();
            const taskService = new TaskDelete();
    
            const int_id = Number(id);
    
            const tasks_por_user = taskRepo.getTaskPorUser(id_user);
    
            const task_por_user = taskService.delete(tasks_por_user, int_id)

    
            res.status(200).send({
                ok: true,
                message: "Tarefa excluída com sucesso",
                data: task_por_user,
            });
        } catch (error: any) {
            res.status(500).send({
                ok: false,
                error: error,
            });
        }
    };
}