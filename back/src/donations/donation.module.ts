import { Module } from '@nestjs/common';
import { DonationService } from './donation.service';
import { DonationController } from './donation.controller';
import { DonationRepository } from './donation.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonationEntity } from '../entidades/donation.entity';
import { UserEntity } from 'src/entidades/user.entity';
import { ShelterEntity } from 'src/entidades/shelter.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DonationEntity,UserEntity, ShelterEntity])],
  providers: [DonationService,DonationRepository],
  controllers: [DonationController] 
})
export class DonationModule {}
