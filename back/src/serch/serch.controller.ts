import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { SerchService } from './serch.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags("Search")
@Controller('search')
export class SearchController {
    constructor(private readonly searchService: SerchService){}

    @Get('pets')
    @ApiQuery({ name: 'breed', required: false }) 
    @ApiQuery({ name: 'pet_size', required: false }) 
    @ApiQuery({ name: 'age', required: false }) 
    filterPets(@Query("breed") breed, @Query("pet_size") pet_size, @Query("age") age){

        if(!breed && !pet_size && !age){
            throw new BadRequestException('Se debe indicar al menos un filtro');
        };

        return this.searchService.filterPets(breed, pet_size,Number(age));
    };

    @Get('shelters')
    @ApiQuery({ name: 'exotic_animals', required: false }) 
    @ApiQuery({ name: 'location', required: false }) 
    filterShelters(@Query("exotic_animals") exotic_animals, @Query("location") location){

        if(!exotic_animals && !location ){ 
            throw new BadRequestException('Se debe indicar al menos un filtro');
        };

        return this.searchService.filterShelters(exotic_animals, location);
    };
}
