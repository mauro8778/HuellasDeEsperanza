import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ShelterEntity } from "src/entidades/shelter.entity";
import { Repository } from "typeorm";

@Injectable()
export class ShelterRepository {
    constructor(@InjectRepository(ShelterEntity) private readonly sheltersRepository : Repository<ShelterEntity>) {}
    
    getShelters(){
        return
    }
    
    getShelterById(id : string) {
        return
    }
    
    addShelter(shelter : ShelterEntity) {
        return
    }
    
    deleteShelter(id : string) {
        return
    }


    async filterShelters(exotic_animals?: string, location?: string) {
        const conditions: any = {};

        if (exotic_animals) {
            conditions.breed = exotic_animals;
        };
        if (location) {
            conditions.pet_size = location;
        };
    

        return await this.sheltersRepository.find({ where: conditions });
    }

}