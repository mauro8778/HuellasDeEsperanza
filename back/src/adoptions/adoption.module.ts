import { Module } from '@nestjs/common';
import { AdoptionService } from './adoption.service';
import { AdoptionController } from './adoption.controller';
import { AdoptionRepository } from './adoption.repository';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdoptionEntity } from '../entidades/adoption.entity';
import { ShelterEntity } from 'src/entidades/shelter.entity';
import { UserEntity } from 'src/entidades/user.entity';
import { PetsEntity } from 'src/entidades/pets.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AdoptionEntity, ShelterEntity, UserEntity, PetsEntity])],
  providers: [AdoptionService,AdoptionRepository],
  controllers: [AdoptionController],
})
export class AdoptionModule {}
