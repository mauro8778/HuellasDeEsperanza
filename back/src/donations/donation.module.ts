import { Module } from '@nestjs/common';
import { DonationService } from './donation.service';
import { DonationController } from './donation.controller';
import { DonationRepository } from './donation.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonationEntity } from './donation.entity';

@Module({
  imports:[TypeOrmModule.forFeature([DonationEntity])],
  providers: [DonationService],
  controllers: [DonationController],
  exports:[DonationRepository]
})
export class DonationModule {}
