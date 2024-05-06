import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt'
import { message } from 'antd';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private jwtService: JwtService) {}
    async validateUserCred (email: string, password:string): Promise<User | undefined> {
        const user = await this.userService.getUserByEmail(email)        
        if (!user)       throw new UnauthorizedException("User not found");
   
       if (!await bcrypt.compare(password, user.password)) throw new UnauthorizedException("Invalid password")

        return user
    }
    async generateToken(user: any) {
        console.log({user});
        
        return {
            access_token: this.jwtService.sign({
                name: user.name,
                sub: user.id
            })
        }
    }
}

