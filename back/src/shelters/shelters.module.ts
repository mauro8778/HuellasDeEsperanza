import { Module } from '@nestjs/common';
import { SheltersService } from './shelters.service';
import { SheltersController } from './shelters.controller';
import { ShelterRepository } from './shelters.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShelterEntity } from '../entidades/shelter.entity';
import { MailService } from 'src/mails/mail.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports:[TypeOrmModule.forFeature([ShelterEntity]),],
  providers: [SheltersService,ShelterRepository, MailService, ConfigService],
  controllers: [SheltersController]
})
export class SheltersModule {}