import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatEntity } from 'src/entidades/chat.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Chat")
@Controller('chat')
export class ChatController {
    constructor(private readonly chatservices:ChatService){}

    // @Get()
    // async chat(){
    //     return await this.chatservices.chat()
    // }

    // @Get(':id')
    // async chatById(@Param('id',ParseUUIDPipe) id:string){
    //     return await this.chatservices.chatById(id)
    // }

    // @Post('new')
    // async newChat(@Body() chat: Omit<ChatEntity, "id">){
    //     return await this.chatservices.newChat(chat)
    // }

    // @Delete('delete/:id')
    // async DeleteChat(@Param('id',ParseUUIDPipe) id:string){
    //     return await this.chatservices.DeleteChat(id)
    // }
}
