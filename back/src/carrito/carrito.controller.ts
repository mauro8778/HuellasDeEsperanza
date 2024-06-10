import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Req } from '@nestjs/common';
import { CreateOrderDto } from 'src/dto/CreateOrderDto';
import { CarritoService } from './carrito.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Carrito")
@Controller('carrito')
export class CarritoController {
    constructor(private readonly carritoServices: CarritoService){}

    
    @Post()
    addOrder(@Param('id',ParseUUIDPipe)shelterid: string, @Req() request){

        const userId = request.user['https://huellasdesperanza.com/userID'];{
        
        return this.carritoServices.addOrder(userId, shelterid)
    }}


    @Get(":id")
    getOrder(@Param("id", ParseUUIDPipe) id: string){
        return this.carritoServices.getOrder(id);
    }

}


