import { Module, OnModuleInit } from '@nestjs/common';
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
import { ConfigModule } from '@nestjs/config';
import { MercadoPagoModule } from './mercado-pago/mercado-pago.module';
import { PreloadService } from './app.PreloadService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShelterEntity } from './entidades/shelter.entity';
import { PetsEntity } from './entidades/pets.entity';
import { GoogleModule } from './google/google.module';

@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal: true,
      }),
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
      GoogleModule,
    Auth0Module,
    MailModule,
    MercadoPagoModule,
    TypeOrmModule.forFeature([ShelterEntity, PetsEntity]),
  ],
  controllers: [AppController], 
  providers: [AppService, PreloadService],
})
export class AppModule implements OnModuleInit {
  constructor(private preloadService: PreloadService){}

  async onModuleInit() {
    await this.preloadService.loadPets();

    await this.preloadService.loadShelters();
  }
}
