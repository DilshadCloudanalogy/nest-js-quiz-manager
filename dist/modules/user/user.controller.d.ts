import { UserService } from "./user.service";
import { UserRegisterRequestDto } from "./dto/user-register-req.dto";
import { User } from "./user.entity";
export default class UserController {
    private readonly userService;
    constructor(userService: UserService);
    doUserRegistration(userRegister: UserRegisterRequestDto): Promise<User>;
}
