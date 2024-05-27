import { Module } from '@nestjs/common';
import { DonationService } from './donation.service';
import { DonationController } from './donation.controller';
import { DonationRepository } from './donation.repository';

@Module({
  providers: [DonationService],
  controllers: [DonationController],
  exports:[DonationRepository]
})
export class DonationModule {}
