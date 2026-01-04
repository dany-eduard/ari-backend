import { Test, TestingModule } from '@nestjs/testing';
import { CongregationController } from './congregation.controller';

describe('CongregationController', () => {
  let controller: CongregationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CongregationController],
    }).compile();

    controller = module.get<CongregationController>(CongregationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
