import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SerchModule } from './serch/serch.module';
import { UsersModule } from './users/users.module';
import { SheltersModule } from './shelters/shelters.module';
import { DonationModule } from './donations/donation.module';
import { AdoptionModule } from './adoptions/adoption.module';
import { AuthModule } from './auth/auth.module';
import { PetsModule } from './pets/pets.module';
import { ChatModule } from './chats/chat.module';

@Module({
  imports: [SerchModule,UsersModule,SheltersModule,DonationModule,AdoptionModule,AuthModule,PetsModule, ChatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
