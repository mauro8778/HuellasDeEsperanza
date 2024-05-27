import { Test, TestingModule } from '@nestjs/testing';
import { SerchController } from './serch.controller';

describe('SerchController', () => {
  let controller: SerchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SerchController],
    }).compile();

    controller = module.get<SerchController>(SerchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
