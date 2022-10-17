import { listTasks } from "../../data/tasks";
import { Tasks } from "../../model/TaskModel";

export class AddTask {
    public addTask(id_user : string, name : string, pass : string, Rpass : string){
        const task = new Tasks(id_user, name, pass, Rpass);
        listTasks.push(task);
    }
}