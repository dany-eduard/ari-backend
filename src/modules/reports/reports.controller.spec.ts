import { Test, TestingModule } from '@nestjs/testing';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { PdfUtil } from './utils/pdf.util';

describe('ReportsController', () => {
  let controller: ReportsController;
  let service: ReportsService;

  const mockReportsService = {
    getRegularPioneersActivity: jest.fn(),
  };

  const mockPdfUtil = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportsController],
      providers: [
        { provide: ReportsService, useValue: mockReportsService },
        { provide: PdfUtil, useValue: mockPdfUtil },
      ],
    }).compile();

    controller = module.get<ReportsController>(ReportsController);
    service = module.get<ReportsService>(ReportsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getRegularPioneersActivity', () => {
    it('should call reportsService.getRegularPioneersActivity with congregation_id from req.user', async () => {
      const mockResult = {
        pioneers: [],
        ranking: [],
      };
      jest.spyOn(mockReportsService, 'getRegularPioneersActivity').mockResolvedValue(mockResult);

      const mockReq = {
        user: {
          id: 10,
          congregation_id: 1,
        },
      };

      const result = await controller.getRegularPioneersActivity(mockReq);

      expect(service.getRegularPioneersActivity).toHaveBeenCalledWith(1);
      expect(result).toEqual(mockResult);
    });
  });
});

