import { Module } from '@nestjs/common';
import { SheltersService } from './shelters.service';
import { SheltersController } from './shelters.controller';
import { ShelterRepository } from './shelters.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShelterEntity } from './shelter.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ShelterEntity])],
  providers: [SheltersService],
  controllers: [SheltersController],
  exports:[ShelterRepository]
})
export class SheltersModule {}
