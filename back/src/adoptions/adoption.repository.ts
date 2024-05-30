import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AdoptionEntity } from "src/entidades/adoption.entity";
import { ShelterEntity } from "src/entidades/shelter.entity";
import { UserEntity } from "src/entidades/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class AdoptionRepository {

    constructor(
        @InjectRepository(AdoptionEntity)
         private adoptionrepository: Repository<AdoptionEntity>,
         @InjectRepository(ShelterEntity)
         private sheltersService: Repository<ShelterEntity>,
         @InjectRepository(UserEntity)
         private usersRepository: Repository<UserEntity>){}


    async AllAdoptions(){
        const adoptions: AdoptionEntity[] = await this.adoptionrepository.find();
        
        if (!adoptions) {
            throw new NotFoundException('No existen adopciones');
        };

        return adoptions;
    }

    async AdoptionsById(id : string){
        const adoptionId: AdoptionEntity = await this.adoptionrepository.findOneBy({id}); 
        
        if (!adoptionId) {
            throw new NotFoundException('No existe la adopción');

        };

        return adoptionId;
    }

    async NewAdoption( adoption: Partial<AdoptionEntity>){
        this.adoptionrepository.save(adoption);
    }

    async Delete(id : string){
        const adoption = await this.adoptionrepository.findOneBy({id});
        if (!adoption) {
            throw new NotFoundException('No existe la adopción');
        };
        await this.adoptionrepository.remove(adoption);
        
        return `La adopción fue eliminada`;
    }

    async AdoptionUser( userid :string){
        const user: UserEntity = await this.usersRepository.findOne({
            where:{id: userid},
            relations:{
                adoptions: true
            }
        });
    
        return user;
    }

    async AdoptionShelter(shelterid : string){
        const shelter: ShelterEntity = await this.sheltersService.findOne({
            where:{id: shelterid},
            relations:{
                adoptions: true
            }
        });
    
        return shelter;
    }

}