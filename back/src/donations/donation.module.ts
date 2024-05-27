import { Module } from '@nestjs/common';
import { DonationService } from './donation.service';
import { DonationController } from './donation.controller';
import { DonationRepository } from './donation.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonationEntity } from '../entidades/donation.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DonationEntity])],
  providers: [DonationService,DonationRepository],
  controllers: [DonationController]
})
export class DonationModule {}
