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

  async deleteUserMail(userEmail: string, username: string) {
    const subject = 'Bienvenido a Huellas de Esperanza';
    const text = `Hola ${username},

    Tu cuenta ha sido cerrada correctamente.
 
    Te informamos que hemos dado cumplimiento a su solicitud de acuerdo con la ley 25.326.
 
    Asimismo, te informamos que la empresa debe dar cumplimiento obligatorio el artículo 328 del Código Civil y Comercial de la Nación que obliga al guardado de información relativa a operaciones financieras.
    
    Saludos,
    Tu Empresa`;
    const html= `<div style="border: 1px solid black; padding: 20px; background: linear-gradient(to bottom, #ff0066, #ffffff); border-radius: 15px;">
    <p>¡Hola, <strong>${username}</strong>!</p>
    <p>Tu cuenta ha sido cerrada correctamente.</p>
    <p>Te informamos que hemos dado cumplimiento a su solicitud de acuerdo con la ley 25.326.</p>
    <p>Asimismo, te informamos que la empresa debe dar cumplimiento obligatorio al artículo 328 del Código Civil y Comercial de la Nación que obliga al guardado de información relativa a operaciones financieras.</p>
    <p>¡Saludos!</p>
    <p>El equipo de Huellas de Esperanza</p>
  </div>`
    await this.sendMail(userEmail, subject, text,html);
  }
  
  async deleteshelterMail(userEmail: string, username: string) {
    const subject = 'Bienvenido a Huellas de Esperanza';
    const text = `Hola ${username},

    Tu cuenta ha sido cerrada correctamente.
 
    Te informamos que hemos dado cumplimiento a su solicitud de acuerdo con la ley 25.326.
 
    Asimismo, te informamos que la empresa debe dar cumplimiento obligatorio el artículo 328 del Código Civil y Comercial de la Nación que obliga al guardado de información relativa a operaciones financieras.
    
    Saludos,
    Tu Empresa`;
    const html= `<div style="border: 1px solid black; padding: 20px; background: linear-gradient(to bottom, #ff0066, #ffffff); border-radius: 15px;">
    <p>¡Hola, <strong>${username}</strong>!</p>
    <p>Tu cuenta ha sido cerrada correctamente.</p>
    <p>Te informamos que hemos dado cumplimiento a su solicitud de acuerdo con la ley 25.326.</p>
    <p>Asimismo, te informamos que la empresa debe dar cumplimiento obligatorio al artículo 328 del Código Civil y Comercial de la Nación que obliga al guardado de información relativa a operaciones financieras.</p>
    <p>¡Saludos!</p>
    <p>El equipo de Huellas de Esperanza</p>
  </div>`
    await this.sendMail(userEmail, subject, text,html);
  }

  async sendShelterActivationMail(shelterEmail: string, shelterName: string) {
    const subject = 'Bienvenido a Huellas de Esperanza';
    const text = `¡Hola, ${shelterName}!

    Tu cuenta ha sido activada correctamente.
    
    Nos alegra darte la bienvenida a Huellas de Esperanza. Ahora puedes acceder a tu cuenta y disfrutar de nuestros servicios.
    
    Para iniciar sesión, haz clic en el siguiente enlace: 
    
    Además, te proporcionaremos un instructivo detallado sobre cómo registrar a las mascotas que se encuentran disponibles para la adopción.
    
    ¡Saludos!
    El equipo de Huellas de Esperanza`
    
    const html= `<div style="border: 1px solid black; padding: 20px; background: linear-gradient(to bottom, #ff0066, #ffffff); border-radius: 15px;">
    <p>¡Hola, <strong>${shelterName}</strong>!</p>
    <p>Tu cuenta se encuentra Activada.</p>
    <p>Nos alegra darte la bienvenida a Huellas de Esperanza. Ahora puedes acceder a tu cuenta y disfrutar de nuestros servicios.</p>
    <p>Para iniciar sesión, haz clic en el siguiente enlace: [Iniciar Sesión]()</p>
    <p>Además, te proporcionaremos un instructivo detallado sobre cómo registrar a las mascotas que se encuentran disponibles para la adopción.</p>
    <p>¡Saludos!</p>
    <p>El equipo de Huellas de Esperanza</p>
  </div>`
    this.logger.log(`Enviando correo a ${shelterEmail} con asunto "${subject}" y texto "${text}"`);
    await this.sendMail(shelterEmail, subject, text,html);
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
