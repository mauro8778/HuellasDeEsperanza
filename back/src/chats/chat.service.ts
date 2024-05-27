import { Injectable } from '@nestjs/common';
import { ChatRepository } from './chatRepository';

@Injectable()
export class ChatService {
constructor(private readonly chatrepository:ChatRepository){}

async chat(){}

async chatById(){}

async newChat(){}

async DeleteChat(){}


}
