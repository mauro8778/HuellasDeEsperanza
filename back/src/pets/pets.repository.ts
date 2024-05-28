import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { PetsEntity } from "src/entidades/pets.entity";
import { Repository } from "typeorm";

@Injectable()
export class PetsRepository {
    constructor(@InjectRepository(PetsEntity) private readonly petsRepository : Repository<PetsEntity>){}

    getPets(){
        return 
    }

    getPetById(id : string) {
        return
    }

    addPet(pet : PetsEntity){
        return
    }

    updatedPet(id : string, pet : Partial<PetsEntity>){
        return
    }

    deletePet(id : string) {
        return 
    }
}