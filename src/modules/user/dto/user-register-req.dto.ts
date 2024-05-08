import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";
import { MESSAGE, REGEX } from "src/app.utils";

export class UserRegisterRequestDto {
    @ApiProperty({
        description: 'This is name',
        example: 'Dilshad Ahmad'
    })
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'The email address for the user',
        example: 'dilshad@gmail.com'
    })
    @IsNotEmpty()
    @IsEmail()
    email: string
     
    @ApiProperty({
        description: 'The password  for the user',
        example: 'Password@123'
    })
    @IsNotEmpty()
    @Length(8, 24)
    @Matches(REGEX.PASSWORD_RULE, {
        message: MESSAGE.PASSWORD_RULE_MESSAGE
    })
    password: string

    @ApiProperty({
        description: 'The confirm password  for the user',
        example: 'Password@123'
    })
    @Length(8, 24)
   @Matches(REGEX.PASSWORD_RULE, {
    message: MESSAGE.PASSWORD_RULE_MESSAGE
   })
    confirm: string



}