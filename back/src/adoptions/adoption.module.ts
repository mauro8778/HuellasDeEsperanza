import { Module } from '@nestjs/common';
import { AdoptionService } from './adoption.service';
import { AdoptionController } from './adoption.controller';
import { AdoptionRepository } from './adoption.repository';

@Module({
  providers: [AdoptionService],
  controllers: [AdoptionController],
  exports:[AdoptionRepository]
})
export class AdoptionModule {}
