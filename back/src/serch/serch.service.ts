import { Injectable } from '@nestjs/common';
import { PetsRepository } from 'src/pets/pets.repository';
import { ShelterRepository } from 'src/shelters/shelters.repository';


@Injectable()
export class SerchService {
    constructor(
                private readonly petsRepository : PetsRepository,
                private readonly sheltersRepository : ShelterRepository
                ){}

    
    filterPets(race : string, size : string, age : number) {
        return
    }

    filterShelters(prov: string, city : string, address : string){
        return
    }
}
