import { BadRequestException, Injectable, Logger, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ShelterEntity } from "src/entidades/shelter.entity";
import { MailService } from "src/mails/mail.service";
import { Repository } from "typeorm";

@Injectable()
export class ShelterRepository {
    private readonly logger = new Logger(MailService.name)
    constructor(@InjectRepository(ShelterEntity) private readonly sheltersRepository : Repository<ShelterEntity>,
    private readonly mailService: MailService,
    )
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
        await this.mailService.sendShelterActivationMail(shelter.email, shelter.name);
        const UpdateShelter= this.sheltersRepository.save(shelter)
        

        return UpdateShelter;
    }
    
    async getShelterById(id : string) {
        const shelter = await this.sheltersRepository.find({where:{id}})
        if (!shelter) {
            throw new NotFoundException('no se encontro el usuario')
          }
          return {shelter};
    }
    
    async addShelter(shelter: Partial<ShelterEntity>) {
        const existE: ShelterEntity = await this.sheltersRepository.findOneBy({ email: shelter.email });
        if (existE) {
          throw new BadRequestException(`El mail ya está registrado`);
        }
      
        const existD: ShelterEntity = await this.sheltersRepository.findOneBy({ dni: shelter.dni });
        if (existD) {
          throw new BadRequestException(`El DNI ya está registrado`);
        }
      
        const newShelter = this.sheltersRepository.create(shelter);
      
        try {
          await this.mailService.sendShelterRegistrationMail(newShelter.email, newShelter.name, newShelter.password);
          this.logger.log(`Mail de registro enviado a ${newShelter.email}`);
        } catch (error) {
          this.logger.error(`Error enviando mail de registro a ${newShelter.email}: ${error.message}`);
        }
      
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