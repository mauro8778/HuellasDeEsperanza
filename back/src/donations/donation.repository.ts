import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DonationEntity } from "src/entidades/donation.entity";
import { ShelterEntity } from "src/entidades/shelter.entity";
import { UserEntity } from "src/entidades/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class DonationRepository {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userrepository : Repository<UserEntity>,
        @InjectRepository(ShelterEntity)
        private readonly shelterepository : Repository<ShelterEntity>
    ){}

    async donation (){
        return
    }

    async donationById (id:string){
        return
    }

    async userDonation(userid:Partial<UserEntity>){
        return
    }

    async shelterDonation(shelterid:Partial<ShelterEntity>){
        return
    }

    async newDonation(donation:DonationEntity){
        return
    }

    async confirmDonation(donation:DonationEntity){
        return
    }
}