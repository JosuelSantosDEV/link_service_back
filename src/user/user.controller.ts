import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./dto/user.dto";

// http://localhost:3000/user

@Controller({ path: "user" })
export class UserController {
    
    constructor(
        private userService: UserService
    ){}
    

    @Get()
    getAll(){

        return "Get All User";

    }

    @Post()
    async create(@Body() createUserData: UserDto){

        return this.userService.registerUser(createUserData);

    }


    @Get(":id")
    getOne( @Param("id") id: string ){

        return this.userService.findOneUser(id)

    }

 

}