import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetsDto } from 'src/dto/createPets.dto';
import { UpdatePetsDto } from 'src/dto/updatePets.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Pets")
@Controller('pets')
export class PetsController {
    constructor(private readonly petsService: PetsService) {}

    @Get()
    getPets(){
        return this.petsService.getPets();
    }

    @Get(':id')
    getPetById(@Param('id', ParseUUIDPipe) id: string){
        return this.petsService.getPetById(id);
    }

    @Post()
    addPet(@Body() pet : CreatePetsDto){
        return this.petsService.addPet(pet);
    }
    @Post('contition/:id')
    conditionPet( id : string ){
        return this.petsService.conditionPet(id)
    }
    
    @Post(':id')
    deletePet(@Param('id', ParseUUIDPipe) id: string){
        return this.petsService.deletePet(id);
    }
    @Put(':id')
    updatedPet(@Param('id', ParseUUIDPipe) id: string ,@Body() dataPet: UpdatePetsDto){
        return this.petsService.updatedPet(id, dataPet);
    }

}
