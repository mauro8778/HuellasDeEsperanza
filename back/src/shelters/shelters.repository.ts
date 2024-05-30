import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ShelterEntity } from "src/entidades/shelter.entity";
import { Repository } from "typeorm";

@Injectable()
export class ShelterRepository {
    constructor(@InjectRepository(ShelterEntity) private readonly sheltersRepository : Repository<ShelterEntity>) {}
    
    async getShelters(){
        const shelters = await this.sheltersRepository.find()

        if(shelters.length === 0)
        {
            throw new NotFoundException('no existen usuarios');
        }

        return shelters;
    }
    
    async getShelterById(id : string) {
        const shelter = await this.sheltersRepository.find({where:{id}})
        if (!shelter) {
            throw new NotFoundException('no se encontro el usuario')
          }
          return {shelter};
    }
    
    async addShelter(shelter : Partial<ShelterEntity>) {
        const newShelter = this.sheltersRepository.create(shelter);
    return await this.sheltersRepository.save(newShelter);
    }
    
    async deleteShelter(id : string) {
        const deleteshelter = await this.sheltersRepository.findOne({ where: { id } })
        if (!deleteshelter) {
          throw new NotFoundException(`no se encontro el usuario con id ${id}`);
        }
        await this.sheltersRepository.delete(id);
        return `usuario con id ${id} y nombre ${deleteshelter.name} se ah eliminado con exito`;
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