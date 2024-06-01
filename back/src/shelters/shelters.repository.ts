import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShelterEntity } from 'src/entidades/shelter.entity';
import { MailService } from 'src/mails/mail.service';
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
    const shelters = await this.sheltersRepository.find({
      select: [
        'id',
        'description',
        'location',
        'pets',
        'shelter_name',
        'isActive',
      ],
    });

    if (shelters.length === 0) {
      throw new NotFoundException('no existen usuarios');
    }

    return shelters;
  }

  async updateShelter(id: string) {
    const shelter = await this.sheltersRepository.findOne({ where: { id } });
    if (!shelter) {
      throw new NotFoundException('no existe regugio');
    }
    shelter.isActive = true;
    await this.mailService.sendShelterActivationMail(
      shelter.email,
      shelter.name,
    );
    const UpdateShelter = this.sheltersRepository.save(shelter);

    return UpdateShelter;
  }

  async getShelterById(id: string) {
    const shelter = await this.sheltersRepository.find({ where: { id } });
    if (!shelter) {
      throw new NotFoundException('no se encontro el usuario');
    }
    return { shelter };
  }

  async deleteShelter(id: string) {
    const deleteshelter = await this.sheltersRepository.findOne({
      where: { id },
    });
    if (!deleteshelter) {
      throw new NotFoundException(`no se encontro el usuario con id ${id}`);
    }
    deleteshelter.isActive = false;
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
