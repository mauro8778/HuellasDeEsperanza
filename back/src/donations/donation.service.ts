import { Injectable } from '@nestjs/common';
import { DonationRepository } from './donation.repository';
import { UserEntity } from 'src/entidades/user.entity';
import { ShelterEntity } from 'src/entidades/shelter.entity';
import { DonationEntity } from 'src/entidades/donation.entity';

@Injectable()
export class DonationService {
    constructor(private readonly donationrepository:DonationRepository){}

    async donation (){
        return await this.donationrepository.donation()
    }

    async donationById (id:string){
        return await this.donationrepository.donationById(id)
    }

    async userDonation(userid:Partial<UserEntity>){
        return await this.donationrepository.userDonation(userid)
    }

    async shelterDonation(shelterid:Partial<ShelterEntity>){
        return await this.donationrepository.shelterDonation(shelterid)
    }

    async newDonation(donation:DonationEntity){
        return await this.donationrepository.newDonation(donation)
    }

    async confirmDonation(donation:DonationEntity){
        return await this.donationrepository.confirmDonation(donation)
    }
}
