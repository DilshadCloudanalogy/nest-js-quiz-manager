import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { UserRegisterRequestDto } from "./dto/user-register-req.dto";

@Injectable({})
export class UserService {
async doUserRegistration (userRegister:UserRegisterRequestDto): Promise<User> {

    const user = new User();
    user.name = userRegister.name;
    user.email = userRegister.email;
    user.password = userRegister.password;
   

    return await user.save();
}
}