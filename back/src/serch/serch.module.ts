import { Module } from '@nestjs/common';
import { SerchService } from './serch.service';
import { SerchController } from './serch.controller';
import { SerchRepository } from './serch.repository';

@Module({
  providers: [SerchService],
  controllers: [SerchController],
  exports:[SerchRepository]
})
export class SerchModule {}
