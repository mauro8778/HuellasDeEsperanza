import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Req, UseGuards } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetsDto } from 'src/dto/createPets.dto';
import { UpdatePetsDto } from 'src/dto/updatePets.dto';
import { ApiTags } from '@nestjs/swagger';
import { Auth0Guard } from 'src/guards/auth0.guard';
import { AuthGuard } from 'src/guards/auth.guard';
import { CreateListImgDto } from 'src/dto/CreateListImg.dto';

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

    @UseGuards(AuthGuard)
    @Post()
    addPet(@Body() pet : CreatePetsDto, @Req() request){
        const shelterId = request.user['https://huellasdesperanza.com/userID'];
        if (!shelterId) {
            throw new Error("Shelter ID is required");
        }
        return this.petsService.addPet(pet,shelterId);
    }
    @Post('condition/:id')
    conditionPet( id : string ){
        return this.petsService.conditionPet(id)
    }
    
    @Post('delete/:id')
    deletePet(@Param('id', ParseUUIDPipe) id: string){
        return this.petsService.deletePet(id);
    }
    @Put(':id')
    updatedPet(@Param('id', ParseUUIDPipe) id: string ,@Body() dataPet: UpdatePetsDto){
        return this.petsService.updatedPet(id, dataPet);
    }

    @Post('/addImg/:id')
    addPetImg(@Param('id', ParseUUIDPipe) id: string, @Body() imgUrl: CreateListImgDto) {
        const {listImg} = imgUrl

        return this.petsService.addPetImg(id, listImg);
    }

}
