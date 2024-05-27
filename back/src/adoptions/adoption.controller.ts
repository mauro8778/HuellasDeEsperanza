import { Controller, Delete, Get, Post } from '@nestjs/common';
import { AdoptionService } from './adoption.service';

@Controller('adoption')
export class AdoptionController {
    constructor(private readonly adopcionservice: AdoptionService){}

    @Get('')
    async AllAdoptions(){}

    @Get(':id')
    async adoptionsById(){}

    @Post('new')
    async newAdoption(){}

    @Delete('delete/:id')
    async Deleteadoption(){}

    @Get('user/:id')
    async adoptionUser(){}
}
