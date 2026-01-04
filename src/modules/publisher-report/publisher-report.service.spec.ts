import { Test, TestingModule } from '@nestjs/testing';
import { PublisherReportService } from './publisher-report.service';

describe('PublisherReportService', () => {
  let service: PublisherReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PublisherReportService],
    }).compile();

    service = module.get<PublisherReportService>(PublisherReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
