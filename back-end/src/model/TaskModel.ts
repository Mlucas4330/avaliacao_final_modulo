import { v4 as uuidv4 } from 'uuid';

export class Tasks {
    private _id: string;
    private _id_user: string;
    private _description: string;
    private _detail: string;

    constructor(iu: string, d: string, desc: string) {
        this._id = uuidv4();
        this._id_user = iu;
        this._description = desc;
        this._detail = d;
    }

    public get id() {
        return this._id;
    }
    public get id_user() {
        return this._id_user;
    }
    public get description() {
        return this._description;
    }
    public get detail() {
        return this._detail;
    }


    public set description(description: string) {
        this._description = description;
    }
    public set detail(detail: string) {
        this._detail = detail;
    }
    public set id_user(id_user: string) {
        this._id_user = id_user;
    }
}