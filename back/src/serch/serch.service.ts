import { Injectable } from '@nestjs/common';
import { PetsRepository } from 'src/pets/pets.repository';
import { ShelterRepository } from 'src/shelters/shelters.repository';


@Injectable()
export class SerchService {
    constructor(
                private readonly petsRepository : PetsRepository,
                private readonly sheltersRepository : ShelterRepository
                ){}

    
    filterPets(breed? : string, pet_size? : string, age? : number) {
        return this.petsRepository.filterPets(breed, pet_size, age);
    };

    filterShelters(exotic_animals?: string, location?: string){
        return this.sheltersRepository.filterShelters(exotic_animals, location);
    };
}
