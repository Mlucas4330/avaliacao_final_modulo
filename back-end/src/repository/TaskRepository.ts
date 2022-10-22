import { listTask } from "../data/Task";

export class TaskRepository {
    public getTaskPorUser(where : string){
        return listTask.filter(task => task.id_user == where);
    }
    public getOneTaskPorUser(where : string, id : string){
        let lista_filtrada = listTask.filter(task => task.id_user == where);
        return lista_filtrada.filter(task => task.id == id);
    }
}