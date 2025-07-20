import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

// MVC

// Model
// Controller
// Service
// Entity
// DTO

@Module({
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {

}