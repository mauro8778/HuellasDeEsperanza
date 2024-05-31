import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { SheltersService } from './shelters.service';
import { CreateShelterDto } from 'src/dto/createShelter.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Shelters")
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
    @Post('active/:id')
    UpdateShelter(id:string){
        return this.sheltersService.UpdateShelter(id);
    }


    @Delete(':id')
    deleteShelter(@Param('id', ParseUUIDPipe) id : string){
        return this.sheltersService.deleteShelter(id);
    }
    
}
