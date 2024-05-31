import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NotFoundError } from "rxjs";
import { UpdateUserDto } from "src/dto/updateUser.dto";
import { UserEntity } from "src/entidades/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository {
    constructor(@InjectRepository(UserEntity)
     private readonly usersRepository : Repository<UserEntity>){}

    async getUsers(){
        const users = await this.usersRepository.find({select: ['id', 'name','last_name','birthdate','location','phone']},)
        
        if(users.length === 0)
        {
            throw new NotFoundException('no existen usuarios');
        }

        return users;
    }

    async getUserById(id : string) {
        const user = await this.usersRepository.find({where:{id}})
        if (!user) {
            throw new NotFoundException('no se encontro el usuario')
          }
          return {user};
    }

    async getProfile(id : string){
        return
    }

    async updatedProfile(id : string, user : Partial<UserEntity>){
        const updateUser = await this.usersRepository.findOne({ where: { id } });
    if (!updateUser) {

      throw new NotFoundException(`no se encontro el usuario con id ${id}`);
    }
    await this.usersRepository.merge(updateUser, user);
    await this.usersRepository.save(updateUser);

    return ` el usuario con id ${id}  y nombre ${updateUser.name} se ah actualizado con exito`;
    }

    async deleteUser(id : string) {
        const deleteUser = await this.usersRepository.findOne({ where: { id } })
    if (!deleteUser) {
      throw new NotFoundException(`no se encontro el usuario con id ${id}`);
    }
    await this.usersRepository.delete(id);
    return `usuario con id ${id} y nombre ${deleteUser.name} se ah eliminado con exito`;
    }
}