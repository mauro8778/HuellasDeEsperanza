import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AdoptionEntity } from "src/entidades/adoption.entity";
import { ShelterEntity } from "src/entidades/shelter.entity";
import { UserEntity } from "src/entidades/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class AdoptionRepository {

    constructor(
        @InjectRepository(AdoptionEntity)
         private readonly adoptionrepository: Repository<AdoptionEntity>){}


    async AllAdoptions(){
        return 
    }

    async AdoptionsById(id : string){
        return
    }

    async NewAdoption(adoption : AdoptionEntity){
        return
    }

    async Delete(id : string){
        return
    }

    async AdoptionUser( userid : Partial<UserEntity>){
        return
    }
    async AdoptionShelter(shelterid : Partial<ShelterEntity>){
        return
    }
}