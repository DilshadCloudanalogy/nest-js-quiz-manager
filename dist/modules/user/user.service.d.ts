import { User } from "./user.entity";
import { UserRegisterRequestDto } from "./dto/user-register-req.dto";
export declare class UserService {
    doUserRegistration(userRegister: UserRegisterRequestDto): Promise<User>;
    getUserByEmail(email: string): Promise<User | undefined>;
}
