import { listUser } from "../data/data";


export class UserRepository {
    public getUser(where?: string){
        if(where){
            return listUser.find(user => user.id === where);
        }
        return listUser;
    }

    public getUserByName(where?: string){
        if(where){
            return listUser.find(user => user.name === where);
       }
       return listUser;
    }
}