import { listUser } from "../../data/User";
import { User } from "../../model/UserModel";

export class UserAdd {
    public make(name : string, pass: string){
        const user = new User(name, pass);
        listUser.push(user);

        return user;
    }
}