import { Tasks } from "../../model/TaskModel";

export class TaskDelete {
    public delete(lista : Tasks[], id: number){
        return lista.splice(id, 1);
    }
}