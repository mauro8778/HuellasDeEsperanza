import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { PetsRepository } from './pets.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetsEntity } from '../entidades/pets.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PetsEntity])],
  controllers: [PetsController],
  providers: [PetsService,PetsRepository]
})
export class PetsModule {}
