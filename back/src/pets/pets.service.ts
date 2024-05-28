import { Injectable } from '@nestjs/common';
import { PetsRepository } from './pets.repository';
import { PetsEntity } from 'src/entidades/pets.entity';

@Injectable()
export class PetsService {
    constructor(private readonly petsRepository : PetsRepository){}

    getPets(){
        return this.petsRepository.getPets();
    }

    getPetById(id : string){
        return this.petsRepository.getPetById(id);
    }

    addPet(pet : PetsEntity){
        return this.petsRepository.addPet(pet);
    }

    updatedPet(id : string, pet : Partial<PetsEntity>) {
        return this.petsRepository.updatedPet(id, pet)
    }

    deletePet(id : string){
        return this.petsRepository.deletePet(id)
    }
}
