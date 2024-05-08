import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserRegisterRequestDto } from "./dto/user-register-req.dto";
import { SETTINGS } from "src/app.utils";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./user.entity";

@ApiTags('User')
@Controller('user')
export default class UserController{
    constructor(private readonly userService: UserService) {}
    @Post('/register')
    @ApiCreatedResponse({
        description: 'Created user object as response',
        type: User
    })
    @ApiBadRequestResponse({
        description: 'User cannot register Try again'
    })
   async doUserRegistration (@Body(SETTINGS.VALIDATION_PIPE) userRegister:UserRegisterRequestDto ) {
    return await this.userService.doUserRegistration(userRegister);
    }
}