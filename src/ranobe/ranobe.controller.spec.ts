import { Test, TestingModule } from '@nestjs/testing';
import { RanobeController } from './ranobe.controller';
import { RanobeService } from './ranobe.service';

describe('RanobeController', () => {
  let controller: RanobeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RanobeController],
      providers: [RanobeService],
    }).compile();

    controller = module.get<RanobeController>(RanobeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
