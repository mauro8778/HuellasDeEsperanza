import { Module } from '@nestjs/common';
import { SerchService } from './serch.service';
import { SearchController } from './serch.controller';
import { PetsRepository } from 'src/pets/pets.repository';
import { ShelterRepository } from 'src/shelters/shelters.repository';

@Module({
  providers: [SerchService, PetsRepository, ShelterRepository],
  controllers: [SearchController]
})
export class SerchModule {}
