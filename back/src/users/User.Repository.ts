import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NotFoundError } from "rxjs";
import { UpdateUserDto } from "src/dto/updateUser.dto";
import { UserEntity } from "src/entidades/user.entity";
import { MailService } from "src/mails/mail.service";
import { Repository } from "typeorm";
import { Role } from "./user.enum";

@Injectable()
export class UserRepository {
    private readonly logger = new Logger(MailService.name);
    constructor(@InjectRepository(UserEntity)
     private readonly usersRepository : Repository<UserEntity>,
     private readonly mailService: MailService,){}

    async getUsers(){
        const users = await this.usersRepository.find()
        
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
        const deleteUser = await this.usersRepository.findOne({
            where: { id },
          });
          if (!deleteUser) {
            throw new NotFoundException(`no se encontro el usuario con id ${id}`);
          }
          deleteUser.isActive = false;
        
          await this.mailService.deleteUserMail(deleteUser.email, deleteUser.name)
          return this.usersRepository.save(deleteUser);
        }
        async activeUsers(id : string) {
          const activeUser = await this.usersRepository.findOne({
              where: { id },
            });
            if (!activeUser) {
              throw new NotFoundException(`no se encontro el usuario con id ${id}`);
            }
            activeUser.isActive = true;

            await this.mailService.deleteUserMail(activeUser.email, activeUser.name)
            return this.usersRepository.save(activeUser);
          }
}