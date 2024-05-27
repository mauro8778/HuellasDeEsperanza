import { Module } from '@nestjs/common';
import { SheltersService } from './shelters.service';
import { SheltersController } from './shelters.controller';
import { ShelterRepository } from './shelters.repository';

@Module({
  providers: [SheltersService],
  controllers: [SheltersController],
  exports:[ShelterRepository]
})
export class SheltersModule {}
