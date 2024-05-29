import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { SerchService } from './serch.service';

@Controller('search')
export class SearchController {
    constructor(private readonly searchService: SerchService){}

    @Get('pets')
    filterPets(@Query() pet){
        const {breed, pet_size, age} = pet;

        if(!breed && !pet_size && !age){
            throw new BadRequestException('Se debe indicar al menos un filtro');
        };

        return this.searchService.filterPets(breed, pet_size, age);
    };

    @Get('shelters')
    filterShelters(@Query() shelter){
        const {exotic_animals, location} = shelter;

        if(!exotic_animals && !location ){ 
            throw new BadRequestException('Se debe indicar al menos un filtro');
        };

        return this.searchService.filterShelters(exotic_animals, location);
    };
}
