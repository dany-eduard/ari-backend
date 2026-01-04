import { Test, TestingModule } from '@nestjs/testing';
import { CongregationService } from './congregation.service';

describe('CongregationService', () => {
  let service: CongregationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CongregationService],
    }).compile();

    service = module.get<CongregationService>(CongregationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
