import { Injectable } from "@nestjs/common";
import { UserDto } from "./dto/user.dto";

@Injectable()
export class  UserService {


    async findOneUser(id : string){
        return await {
            id,
            name: "User",
            email: "user@email.com"
        }
    }
    async registerUser(userDatas : UserDto){
        return await {user: userDatas}
    }
    

}