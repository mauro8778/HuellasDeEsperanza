import { Test, TestingModule } from '@nestjs/testing';
import { SerchService } from './serch.service';

describe('SerchService', () => {
  let service: SerchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SerchService],
    }).compile();

    service = module.get<SerchService>(SerchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
