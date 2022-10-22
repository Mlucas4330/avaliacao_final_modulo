import express, { Router, Request, Response } from "express";
import { UserController } from "../controller/UserController";

export const UserRoute = Router();

UserRoute.post('/', UserController.Index);

UserRoute.post('/register', UserController.acaoSalvar);