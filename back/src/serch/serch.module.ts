import { Module } from '@nestjs/common';
import { SerchService } from './serch.service';
import { SerchController } from './serch.controller';
import { SerchRepository } from './serch.repository';

@Module({
  providers: [SerchService,SerchRepository],
  controllers: [SerchController]
})
export class SerchModule {}
