import { Injectable } from '@nestjs/common';
import { ShelterRepository } from './shelters.repository';
import { ShelterEntity } from 'src/entidades/shelter.entity';

@Injectable()
export class SheltersService {
    constructor(private readonly sheltersRepository : ShelterRepository){}

    getShelters(){
        return this.sheltersRepository.getShelters();
    }

    getShelterById(id : string){
        return this.sheltersRepository.getShelterById(id);
    }

    addShelter(shelter : Partial<ShelterEntity>){
        return this.sheltersRepository.addShelter(shelter);
    }

    deleteShelter(id : string) {
        return this.sheltersRepository.deleteShelter(id);
    }
}
