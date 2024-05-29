import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/entidades/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuthRepository {
    constructor(
        @InjectRepository(UserEntity)
    private readonly userrepository:Repository<UserEntity>
    ){}
    

    async Register(credential:Partial<UserEntity>){
        return
    }

    async Login(credential:Partial<UserEntity>){
        return
    }

    async Logout(credential:Partial<UserEntity>){
        return
    }
}