import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePetsDto } from "src/dto/createPets.dto";
import { PetsEntity } from "src/entidades/pets.entity";
import { Repository } from "typeorm";

@Injectable()
export class PetsRepository {
    constructor(@InjectRepository(PetsEntity) 
    private petsRepository: Repository<PetsEntity>){}
    
    async getPets(){
        const Pets = await this.petsRepository.find();
        
        return Pets;
    };
    
    async getPetById(id : string){
        const pet = await this.petsRepository.findOneBy({id})
        if (!pet) {
            throw new BadRequestException("El animal no existe");
        };
        
        return pet;
    };
    
    addPet(pet: CreatePetsDto){
        this.petsRepository.save(pet);
        
        return "Mascota agregada correctamente";
    };
    
    async updatedPet(id: string, upet: Partial<PetsEntity>){
        const pet = await this.petsRepository.findOneBy({id});
        if (!pet) {
            throw new BadRequestException("El animal no existe")
        };
        await this.petsRepository.update(id, upet);
        const updatePet = await this.petsRepository.findOneBy({id});
        
        return updatePet;
    };
    
    async deletePet(id: string){
        const pet = await this.petsRepository.findOneBy({id});
        if (!pet) {
            throw new BadRequestException("El animal no existe")
        };
        await this.petsRepository.remove(pet);
        
        return "La mascota fue eliminada"
    };
    
    
    async filterPets(breed?: string, pet_size?: string, age?: number){
        const conditions: any = {};

        if (breed) {
            conditions.breed = breed;
        }
        if (pet_size) {
            conditions.pet_size = pet_size;
        }
        if (age) {
            conditions.age = age;
        }
    
        return await this.petsRepository.find({ where: conditions });
    }

}