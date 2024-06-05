import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { PetsRepository } from './pets.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetsEntity } from '../entidades/pets.entity';
import { ShelterEntity } from 'src/entidades/shelter.entity';
import { ShelterRepository } from 'src/shelters/shelters.repository';
import { MailService } from 'src/mails/mail.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports:[TypeOrmModule.forFeature([PetsEntity,ShelterEntity])],
  controllers: [PetsController],
  providers: [PetsService,PetsRepository,ShelterRepository,MailService,ConfigService]
})
export class PetsModule {}
