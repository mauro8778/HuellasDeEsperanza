import { Injectable } from '@nestjs/common';
import { ShelterRepository } from './shelters.repository';

@Injectable()
export class SheltersService {
  constructor(private readonly sheltersRepository: ShelterRepository) {}

  getShelters() {
    return this.sheltersRepository.getShelters();
  }

  getShelterById(id: string) {
    return this.sheltersRepository.getShelterById(id);
  }

  deleteShelter(id: string) {
    return this.sheltersRepository.deleteShelter(id);
  }

  updateShelter(id: string) {
    return this.sheltersRepository.updateShelter(id);
  }
}
