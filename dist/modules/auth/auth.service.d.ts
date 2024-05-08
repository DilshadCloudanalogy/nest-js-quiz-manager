import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUserCred(email: string, password: string): Promise<User | undefined>;
    generateToken(user: any): Promise<{
        access_token: string;
    }>;
}
