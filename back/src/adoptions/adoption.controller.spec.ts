import { Test, TestingModule } from '@nestjs/testing';
import { AdoptionController } from './adoption.controller';

describe('AdoptionController', () => {
  let controller: AdoptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdoptionController],
    }).compile();

    controller = module.get<AdoptionController>(AdoptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
