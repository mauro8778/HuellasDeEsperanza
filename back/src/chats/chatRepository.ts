import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { channel } from "diagnostics_channel";
import { ChatEntity } from "src/entidades/chat.entity";
import { Repository } from "typeorm";

@Injectable()
export class ChatRepository {
    constructor(@InjectRepository(ChatEntity)
                private chatrepository:Repository<ChatEntity>){}

    async chat(){
        const chat = await this.chatrepository.find();
    
        return chat;
    }

    async chatById(id:string){
        const chatId = this.chatrepository.findOneBy({id});

        if (!chatId){
            throw new BadRequestException("El chat no existe")
        }

        return chatId;
    }

    async newChat(chat: Partial<ChatEntity>){
        this.chatrepository.save(chat);

        return "Nuevo chat creado"
    }

    async DeleteChat(id:string){
    const chat = await this.chatrepository.findOneBy({id});
        if (!chat) {
            throw new BadRequestException(`El usuario con el id: ${id} no existe`);
        };
        this.chatrepository.remove(chat);
        
        return `El chat se eliminó correctamente`;
    }

}