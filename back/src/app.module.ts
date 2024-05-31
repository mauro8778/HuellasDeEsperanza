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
import { databaseConfig } from './config/database.config';
import { FileUploadModule } from './file_upload/file_upload.module';
import { Auth0Module } from './auth0/auth0.module';
import { MailModule } from './mails/mail.module';

@Module({
  imports: [
    databaseConfig,
    SerchModule,
    UsersModule,
    SheltersModule,
    DonationModule,
    AdoptionModule,
    AuthModule,
    PetsModule,
    ChatModule,
    FileUploadModule,
    Auth0Module,
    MailModule,
  ],
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {}
