import { listUser } from "../../data/data";
import { User } from "../../model/UserModel";

export class AddUser {
    public addUser(name : string, pass : string, Rpass : string){
        const user = new User(name, pass, Rpass);
        listUser.push(user);

        return user;
    }
}