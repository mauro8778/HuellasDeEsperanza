import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ShelterEntity } from "src/entidades/shelter.entity";
import { MailService } from "src/mails/mail.service";
import { Repository } from "typeorm";

@Injectable()
export class ShelterRepository {
    constructor(@InjectRepository(ShelterEntity) private readonly sheltersRepository : Repository<ShelterEntity>,
    private readonly mailService: MailService, )
     {}
    
    async getShelters(){
        const shelters = await this.sheltersRepository.find({
        select:['id','description','location','pets','shelter_name','isActive']
        })

        if(shelters.length === 0)
        {
            throw new NotFoundException('no existen usuarios');
        }

        return shelters;
    }
    async UpdateShelter(id:string){
        const shelter = await this.sheltersRepository.findOne({where:{id}})
        if(!shelter){
            throw new NotFoundException('no existe regugio')
        }
        shelter.isActive=true

        const UpdateShelter= this.sheltersRepository.save(shelter)
        await this.mailService.sendShelterActivationMail(shelter.email, shelter.name);

        return UpdateShelter;
    }
    
    async getShelterById(id : string) {
        const shelter = await this.sheltersRepository.find({where:{id}})
        if (!shelter) {
            throw new NotFoundException('no se encontro el usuario')
          }
          return {shelter};
    }
    
    async addShelter(shelter : Partial<ShelterEntity>) {
        const existE: ShelterEntity = await this.sheltersRepository.findOneBy({email: shelter.email})
        if (existE) {
            throw new BadRequestException(`El mail ya esta registrado`)
        }
        
        const existD: ShelterEntity = await this.sheltersRepository.findOneBy({dni: shelter.dni})
        if (existD) {
            throw new BadRequestException(`El DNI ya esta registrado`)

        }
        const newShelter = this.sheltersRepository.create(shelter);

    return await this.sheltersRepository.save(newShelter);
    }
    
    async deleteShelter(id : string) {
        const deleteshelter = await this.sheltersRepository.findOne({ where: { id } })
        if (!deleteshelter) {
          throw new NotFoundException(`no se encontro el usuario con id ${id}`);
        }
        deleteshelter.isActive=false
        return this.sheltersRepository.save(deleteshelter)
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