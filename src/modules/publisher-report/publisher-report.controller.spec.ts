import { Test, TestingModule } from '@nestjs/testing';
import { PublisherReportController } from './publisher-report.controller';

describe('PublisherReportController', () => {
  let controller: PublisherReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublisherReportController],
    }).compile();

    controller = module.get<PublisherReportController>(PublisherReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
