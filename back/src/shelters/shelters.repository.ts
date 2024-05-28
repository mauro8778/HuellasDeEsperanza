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
}