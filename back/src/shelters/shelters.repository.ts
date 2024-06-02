import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShelterEntity } from 'src/entidades/shelter.entity';
import { MailService } from 'src/mails/mail.service';
import { Role } from 'src/users/user.enum';
import { Repository } from 'typeorm';

@Injectable()
export class ShelterRepository {
  private readonly logger = new Logger(MailService.name);
  constructor(
    @InjectRepository(ShelterEntity)
    private readonly sheltersRepository: Repository<ShelterEntity>,
    private readonly mailService: MailService,
  ) {}

  async getShelters() {
    const shelters = await this.sheltersRepository.find();

    if (shelters.length === 0) {
      throw new NotFoundException('no existen usuarios');
    }

    return shelters;
  }

  async updateActiveShelter(id: string) {
    const shelter = await this.sheltersRepository.findOne({ where: { id } });
    if (!shelter) {
      throw new NotFoundException('no existe regugio');
    }
    if(shelter.isActive=== true){
      throw new NotFoundException('el refugio ya esta activo')
    }
    shelter.isActive = true;
    await this.mailService.sendShelterActivationMail(
      shelter.email,
      shelter.shelter_name,
    );

    if(shelter.role=== Role.user){
      shelter.role=Role.shelters
    }
    
    const UpdateShelter = this.sheltersRepository.save(shelter);

    return UpdateShelter;
  }

  async getShelterById(id: string) {
    const shelter = await this.sheltersRepository.find({ where: { id } });
    if (!shelter) {
      throw new NotFoundException('no se encontro el refugio');
    }
    return { shelter };
  }

  async deleteShelter(id: string) {
    const deleteshelter = await this.sheltersRepository.findOne({
      where: { id },
    });
    if (!deleteshelter) {
      throw new NotFoundException(`no se encontro el refugio con id ${id}`);
    }
    if(deleteshelter.isActive=== false){
      throw new NotFoundException('el refugio no esta activo')
    }
    deleteshelter.isActive = false;
    if(deleteshelter.role=== Role.shelters){
      deleteshelter.role=Role.user
    }
    await this.mailService.deleteshelterMail(deleteshelter.email,deleteshelter.shelter_name)
    return this.sheltersRepository.save(deleteshelter);
  }

  async filterShelters(exotic_animals?: string, location?: string) {
    const conditions: any = {};

    if (exotic_animals) {
      conditions.breed = exotic_animals;
    }
    if (location) {
      conditions.pet_size = location;
    }

    return await this.sheltersRepository.find({ where: conditions });
  }
}
