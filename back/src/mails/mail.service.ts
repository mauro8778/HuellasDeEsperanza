import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;
  private readonly logger = new Logger(MailService.name);

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get<string>('EMAIL_USER'),
        pass: this.configService.get<string>('EMAIL_PASS'),
      },
    });
  }

  async sendMail(to: string, subject: string, text: string, html?: string) {
    if (!to) {
      this.logger.error('No recipients defined');
      throw new Error('No recipients defined');
    }

    const mailOptions = {
      from: this.configService.get<string>('EMAIL_USER'),
      to,
      subject,
      text,
      html,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      this.logger.log('Email sent: ' + info.response);
    } catch (error) {
      this.logger.error('Error sending email: ' + error.message);
      throw new Error('Error sending email');
    }
  }

  async sendUserRegistrationMail(userEmail: string, username: string, password: string) {
    const subject = 'Bienvenido a Huellas de Esperanza';
    const text = `Hola ${username},\n\nTus credenciales son:\nUsuario: ${username}\nContraseña: ${password}`;
    await this.sendMail(userEmail, subject, text);
  }

  async sendShelterRegistrationMail(shelterEmail: string, shelterName: string, password: string) {
    const subject = 'Bienvenido a Huellas de Esperanza';
    const text = `Hola ${shelterName},\n\nTus credenciales son:\nNombre del Refugio: ${shelterName}\nContraseña: ${password}\n\nGracias por elegirnos, a la brevedad se le enviará un mail de confirmación para empezar a trabajar con nosotros.`;
    this.logger.log(`Enviando correo a ${shelterEmail} con asunto "${subject}" y texto "${text}"`);
    
    await this.sendMail(shelterEmail, subject, text);
  }

  async sendShelterActivationMail(shelterEmail: string, shelterName: string) {
    const subject = 'Su cuenta ha sido activada';
    const text = `Hola ${shelterName},\n\nYa puedes subir las fotos de tus perritos. Para subir una foto, llena el formulario para subir un perro nuevo a la página.`;
    this.logger.log(`Enviando correo a ${shelterEmail} con asunto "${subject}" y texto "${text}"`);
    await this.sendMail(shelterEmail, subject, text);
  }

  async sendDonationMail(userEmail: string, shelterName: string) {
    const subject = 'Gracias por tu donación';
    const text = `Gracias por haber donado en Huellas de Esperanza, al refugio ${shelterName}.`;
    await this.sendMail(userEmail, subject, text);
  }

  async sendVolunteerMail(userEmail: string, shelterName: string) {
    const subject = 'Gracias por ser voluntario';
    const text = `Gracias por elegir ser voluntario. Se le informará al refugio ${shelterName} que usted es voluntario. El refugio se comunicará con usted, vía email.`;
    await this.sendMail(userEmail, subject, text);
  }
}
