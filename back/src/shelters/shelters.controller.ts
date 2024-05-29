import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { SheltersService } from './shelters.service';
import { CreateShelterDto } from 'src/dto/createShelter.dto';

@Controller('shelters')
export class SheltersController {
    constructor(private readonly sheltersService : SheltersService) {}

    @Get()
    getShelters(){
        return this.sheltersService.getShelters();
    }

    @Get(':id')
    getShelterById(@Param('id', ParseUUIDPipe) id : string){
        return this.sheltersService.getShelterById(id);
    }

    @Post()
    addShelter(@Body() shelter : CreateShelterDto) {
        return this.sheltersService.addShelter(shelter)
    }

    @Delete(':id')
    deleteShelter(@Param('id', ParseUUIDPipe) id : string){
        return this.sheltersService.deleteShelter(id);
    }
}
