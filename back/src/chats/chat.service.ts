import { Injectable } from '@nestjs/common';
import { ChatRepository } from './chatRepository';
import { ChatEntity } from 'src/entidades/chat.entity';

@Injectable()
export class ChatService {
constructor(private readonly chatrepository:ChatRepository){}

async chat(){
    return await this.chatrepository.chat()
}

async chatById(id:string){
    return await this.chatrepository.chatById(id)
}

async newChat(chat:Omit<ChatEntity, "id">){
    return await this.chatrepository.newChat(chat)
}

async DeleteChat(id:string){
    return await this.chatrepository.DeleteChat(id)
}


}
