import { BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: 'users'})
export class User extends BaseEntity {
    @ApiProperty({description: 'Primary key as User ID', example: 1})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({description: 'User name', example: 'Dilshad Ahmad'})
    @Column()
    name: string;

    @ApiProperty({description: 'User email', example: 'dilshad@gmail.com'})

    @Column({
        unique: true,
    })
    email: string;


    @ApiProperty({description: 'User Password', example: 'JV PBZOBQ QBUQ'})
    @Column()
    password: string;

    @ApiProperty({description: 'When user was created'})
    @CreateDateColumn()
    createdAt: Date

    @ApiProperty({description: 'When user was updated'})
    @CreateDateColumn()
    updatedAt: Date

    @BeforeInsert()
     async setPassword(password: string) {
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(password|| this.password, salt);
     }
}