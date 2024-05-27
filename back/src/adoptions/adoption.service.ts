import { Injectable } from '@nestjs/common';
import { AdoptionRepository } from './adoption.repository';

@Injectable()
export class AdoptionService {
    constructor (private readonly adoptionrepository:AdoptionRepository){}

    
    async AllAdoptions(){}

    async adoptionsById(){}

    async newAdoption(){}

    async Delete(){}

    async adoptionUser(){}
}
