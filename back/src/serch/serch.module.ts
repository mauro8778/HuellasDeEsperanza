import { Module } from '@nestjs/common';
import { SerchService } from './serch.service';
import { SearchController } from './serch.controller';
import { PetsRepository } from 'src/pets/pets.repository';
import { ShelterRepository } from 'src/shelters/shelters.repository';
import { ShelterEntity } from 'src/entidades/shelter.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetsEntity } from 'src/entidades/pets.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ShelterEntity, PetsEntity])],
  providers: [SerchService, PetsRepository, ShelterRepository],
  controllers: [SearchController]
})
export class SerchModule {}
