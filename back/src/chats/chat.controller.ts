import { Controller, Delete, Get, Post } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
    constructor(private readonly chatservices:ChatService){}

    @Get()
    async chat(){}

    @Get(':id')
    async chatById(){}

    @Post('new')
    async newChat(){}

    @Delete('delete/:id')
    async DeleteChat(){}
}
