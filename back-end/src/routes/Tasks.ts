import express, { Router, Request, Response } from "express";
import { TaskController } from "../controller/TaskController";

export const TaskRoute = Router();

TaskRoute.get('/:id_user', TaskController.getAll);

TaskRoute.get('/:id_user/:id', TaskController.getOne);

TaskRoute.post('/:id_user/criar', TaskController.acaoSalvar)

TaskRoute.put('/:id_user/:id', TaskController.editar);

TaskRoute.delete('/:id_user/:id', TaskController.deletar);
