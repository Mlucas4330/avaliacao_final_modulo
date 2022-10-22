import { listUser } from "../data/User";

export class UserRepository {
    public getUser(where : string){
        return listUser.find(user => user.name == where);
    }
}

