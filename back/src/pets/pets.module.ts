import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { PetsRepository } from './pets.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetsEntity } from './pets.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PetsEntity])],
  providers: [PetsService],
  controllers: [PetsController],
  exports:[PetsRepository]
})
export class PetsModule {}
