import { Module } from '@nestjs/common';
import { AdoptionService } from './adoption.service';
import { AdoptionController } from './adoption.controller';
import { AdoptionRepository } from './adoption.repository';
import { TypeORMError } from 'typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdoptionEntity } from '../entidades/adoption.entity';

@Module({
  imports:[TypeOrmModule.forFeature([AdoptionEntity])],
  providers: [AdoptionService,AdoptionRepository],
  controllers: [AdoptionController],
})
export class AdoptionModule {}
