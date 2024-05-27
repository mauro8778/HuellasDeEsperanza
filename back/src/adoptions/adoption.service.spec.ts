import { Test, TestingModule } from '@nestjs/testing';
import { AdoptionService } from './adoption.service';

describe('AdoptionService', () => {
  let service: AdoptionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdoptionService],
    }).compile();

    service = module.get<AdoptionService>(AdoptionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
