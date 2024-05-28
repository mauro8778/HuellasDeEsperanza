import { Injectable } from '@nestjs/common';
import { UserRepository } from './User.Repository';
import { UpdateUserDto } from 'src/dto/updateUser.dto';

@Injectable()
export class UserService {
    constructor(private readonly usersRepository : UserRepository){}

    getUsers(){
        return this.usersRepository.getUsers()
    }

    getUserById(id : string) {
        return this.usersRepository.getUserById(id)
    }

    getProfile(id : string){
        return this.usersRepository.getProfile(id)
    }

    updatedProfile(id : string, user : UpdateUserDto){
        return this.usersRepository.updatedProfile(id,user)
    }

    deleteUser(id : string) {
        return this.usersRepository.deleteUser(id)
    }
}
