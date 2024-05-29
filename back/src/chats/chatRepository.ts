import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ChatEntity } from "src/entidades/chat.entity";
import { Repository } from "typeorm";

@Injectable()
export class ChatRepository {
    constructor(
        @InjectRepository(ChatEntity)
    private readonly chatrepository:Repository<ChatEntity>){}

async chat(){
    return
}

async chatById(id:string){
    return 
}

async newChat(chat: ChatEntity){
    return
}

async DeleteChat(id:string){
    return
}
}