import { listUser } from "../../data/User";
import { Tasks } from "../../model/TaskModel";

export class TaskAdd {
    public make(obj: any) {
        try {
            const user = listUser.find(user => user.id == obj.id_user);

            const task = new Tasks(obj.id_user, obj.descricao, obj.detalhamento);

            user?.addTask(task);

            if (!user) {
                return 'User not found'
            }
            return user?.tasks;
        }
        catch (err: any) {
            return err;
        }

    }
}