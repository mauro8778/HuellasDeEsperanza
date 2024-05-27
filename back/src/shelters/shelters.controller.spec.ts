import { Test, TestingModule } from '@nestjs/testing';
import { SheltersController } from './shelters.controller';

describe('SheltersController', () => {
  let controller: SheltersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SheltersController],
    }).compile();

    controller = module.get<SheltersController>(SheltersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
