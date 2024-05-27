import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { PetsRepository } from './pets.repository';

@Module({
  providers: [PetsService],
  controllers: [PetsController],
  exports:[PetsRepository]
})
export class PetsModule {}
