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
    updatedProfile(id : string, user : any){
        return this.usersRepository.updatedProfile(id,user)
    }

    deleteUser(id : string) {
        return this.usersRepository.deleteUser(id)
    }
    activeUsers(id : string) {
        return this.usersRepository.activeUsers(id)
    }
}
