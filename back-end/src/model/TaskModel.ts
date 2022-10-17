import { v4 as uuidv4 } from 'uuid';

export class Tasks {
    private _id: string;
    private _id_user: string;
    private _detail: string;
    private _created_at: string;
    private _updated_at: string;

    constructor(iu: string, d: string, c: string, u: string) {
        this._id = uuidv4();
        this._id_user = iu;
        this._detail = d;
        this._created_at = c;
        this._updated_at = u;
    }

    public get id() {
        return this._id;
    }

    public get detail() {
        return this._detail;
    }
    public get created_at() {
        return this._created_at;
    }
    public get updated_at() {
        return this._updated_at;
    }
    public get id_user() {
        return this._id_user;
    }

    public set detail(detail: string) {
        this._detail = detail;
    }
    public set created_at(created_at: string) {
        this._created_at = created_at;
    }
    public set updated_at(updated_at: string) {
        this._updated_at = updated_at;
    }
    public set id_user(id_user : string) {
        this._id_user = id_user;
    }
}