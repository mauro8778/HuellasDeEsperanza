import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { SerchService } from './serch.service';

@Controller('search')
export class SearchController {

    constructor(private readonly searchService : SerchService){}

    @Get('pets')
    filterPets(@Query() pet){
        const {race, tam, age} = pet

        if(!race && !tam && !age) throw new BadRequestException('Se debe indicar al menos un filtro')
        return this.searchService.filterPets(race,tam,age)
    }

    @Get('shelters')
    filterShelters(@Query() shelter){
        const {prov, city, address} = shelter

        if(!prov && !city && !address) throw new BadRequestException('Se debe indicar al menos un filtro')

        return this.searchService.filterShelters(prov, city, address)
    }
}
