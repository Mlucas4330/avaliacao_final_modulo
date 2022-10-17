import { listTasks } from "../data/tasks";


export class TasksRepository {
    public getTask(where?: string){
        if(where){
            return listTasks.find(task => task.id === where);
        }
        return listTasks;
    }
}