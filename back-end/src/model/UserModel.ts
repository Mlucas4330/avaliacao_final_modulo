import { Tasks } from "./TaskModel";
import { v4 as uuidv4 } from 'uuid';



export class User {
    private _id: string;
    private _name: string;
    private _pass: string;
    private _Rpass: string;
    private _tasks: Tasks[];

    constructor(n: string, p: string, rp: string) {
        this._id = uuidv4();
        this._name = n;
        this._pass = p;
        this._Rpass = rp;
        this._tasks = [];
    }

    public get id() {
        return this._id;
    }

    public get name() {
        return this._name;
    }
    public get pass() {
        return this._pass;
    }
    public get Rpass() {
        return this._Rpass;
    }
    public get tasks() {
        return this._tasks;
    }
 
    public set name(name: string) {
        this._name = name;
    }
    public set pass(pass: string) {
        this._pass = pass;
    }
    public set Rpass(Rpass: string) {
        this._Rpass = Rpass;
    }
    public setTasks(task : Tasks) {
        this._tasks.push(task);
    }
}