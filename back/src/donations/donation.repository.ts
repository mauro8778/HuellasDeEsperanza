import { Injectable, NotFoundException } from "@nestjs/common";
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
        private readonly shelterepository : Repository<ShelterEntity>,
        @InjectRepository(DonationEntity)
        private readonly donationrepository: Repository<DonationEntity>
    ){}

    async donation (){
        const donations= await this.donationrepository.find()
        if (!donations) {
            throw new NotFoundException('no se encontro el usuario')
          }
          return {donations};
    }

    async donationById (id:string){
        const donation = await this.donationrepository.find({where:{id}})
        if (!donation) {
            throw new NotFoundException('no se encontro el usuario')
          }
          return {donation};
    }

    async userDonation(userId: string): Promise<DonationEntity[]> {
        const user = await this.userrepository.findOne({
          where: { id: userId },
          relations: ['donations'],
        });
    
        if (!user) {
          throw new NotFoundException('No se encontró el usuario');
        }
    
        return user.donations;
      }

    async shelterDonation(shelterid:string){
        const shelter = await this.shelterepository.findOne({
            where: { id: shelterid },
            relations: ['donations'],
          });
      
          if (!shelter) {
            throw new NotFoundException('No se encontró el usuario');
          }
      
          return shelter.donations;
    }

    async newDonation(donation:DonationEntity){
        const newDonation = this.donationrepository.create(donation);
        return await this.donationrepository.save(newDonation);
    }

    async confirmDonation(donation:DonationEntity){
        return
    }
}