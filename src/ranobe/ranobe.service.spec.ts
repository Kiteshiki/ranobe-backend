import { Test, TestingModule } from '@nestjs/testing';
import { RanobeService } from './ranobe.service';

describe('RanobeService', () => {
  let service: RanobeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RanobeService],
    }).compile();

    service = module.get<RanobeService>(RanobeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
