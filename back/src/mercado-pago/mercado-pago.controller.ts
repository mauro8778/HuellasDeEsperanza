import { Body, Controller, Post } from '@nestjs/common';
import { MercadoPagoService } from './mercado-pago.service';
import { mercadoDto } from 'src/dto/mercado.dto.mp';

@Controller('mercado-pago')
export class MercadoPagoController {
    constructor( private mercadoServicios: MercadoPagoService ){}

    @Post()
    createPreference(@Body() orderData: mercadoDto){
        this.mercadoServicios.createPreference(orderData)
    }
}
