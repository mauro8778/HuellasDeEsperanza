import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateUserDto } from "src/dto/updateUser.dto";
import { UserEntity } from "src/entidades/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository {
    constructor(@InjectRepository(UserEntity) private readonly usersRepository : Repository<UserEntity>){}

    getUsers(){
        return
    }

    getUserById(id : string) {
        return
    }

    getProfile(id : string){
        return
    }

    updatedProfile(id : string, user : UpdateUserDto){
        return
    }

    deleteUser(id : string) {
        return
    }
}