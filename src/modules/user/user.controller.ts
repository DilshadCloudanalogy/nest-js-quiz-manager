import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserRegisterRequestDto } from "./dto/user-register-req.dto";
import { SETTINGS } from "src/app.utils";

@Controller('user')
export default class UserController{
    constructor(private readonly userService: UserService) {}
    @Post('/register')
   async doUserRegistration (@Body(SETTINGS.VALIDATION_PIPE) userRegister:UserRegisterRequestDto ) {
    return await this.userService.doUserRegistration(userRegister);
    }
}