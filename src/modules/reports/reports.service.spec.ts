import { Test, TestingModule } from '@nestjs/testing';
import { ReportsService } from './reports.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PdfUtil } from './utils/pdf.util';
import { PublisherHelper } from './helpers/publisher.helpers';
import { ZipUtil } from './utils/zip.util';

describe('ReportsService', () => {
  let service: ReportsService;
  let prisma: PrismaService;

  const mockPrismaService = {
    person: {
      findMany: jest.fn(),
    },
    congregation: {
      findUnique: jest.fn(),
    },
  };

  const mockPdfUtil = {};
  const mockPublisherHelper = {};
  const mockZipUtil = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReportsService,
        { provide: PrismaService, useValue: mockPrismaService },
        { provide: PdfUtil, useValue: mockPdfUtil },
        { provide: PublisherHelper, useValue: mockPublisherHelper },
        { provide: ZipUtil, useValue: mockZipUtil },
      ],
    }).compile();

    service = module.get<ReportsService>(ReportsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getRegularPioneersActivity', () => {
    it('should return pioneers activity and ranking correctly', async () => {
      const mockPeople = [
        {
          id: 1,
          first_name: 'Carlos',
          last_name: 'Alvarez',
          reports: [
            { id: 101, hours: 60, month: 1, year: 2026 },
            { id: 102, hours: 65, month: 2, year: 2026 },
          ],
        },
        {
          id: 2,
          first_name: 'Beatriz',
          last_name: 'Benitez',
          reports: [
            { id: 201, hours: 570, month: 1, year: 2026 },
          ],
        },
        {
          id: 3,
          first_name: 'Daniel',
          last_name: 'Zapata',
          reports: [
            { id: 301, hours: 600, month: 1, year: 2026 },
          ],
        },
        {
          id: 4,
          first_name: 'Elena',
          last_name: 'Gomez',
          reports: [],
        },
      ];

      jest.spyOn(mockPrismaService.person, 'findMany').mockResolvedValue(mockPeople);

      const result = await service.getRegularPioneersActivity(1);

      expect(prisma.person.findMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({
            congregation_id: 1,
            is_regular_pioneer: true,
            is_active: true,
            deletedAt: null,
          }),
          orderBy: [{ last_name: 'asc' }, { first_name: 'asc' }],
        }),
      );

      // Check pioneers array (sorted descending by currentTotalHours)
      expect(result.pioneers).toHaveLength(4);
      expect(result.pioneers[0]).toEqual({
        id: 3,
        firstName: 'Daniel',
        lastName: 'Zapata',
        reportedMonths: 1,
        monthlyAverageHours: 600,
        currentTotalHours: 600,
      });
      expect(result.pioneers[1]).toEqual({
        id: 2,
        firstName: 'Beatriz',
        lastName: 'Benitez',
        reportedMonths: 1,
        monthlyAverageHours: 570,
        currentTotalHours: 570,
      });
      expect(result.pioneers[2]).toEqual({
        id: 1,
        firstName: 'Carlos',
        lastName: 'Alvarez',
        reportedMonths: 2,
        monthlyAverageHours: 62.5,
        currentTotalHours: 125,
      });
      expect(result.pioneers[3]).toEqual({
        id: 4,
        firstName: 'Elena',
        lastName: 'Gomez',
        reportedMonths: 0,
        monthlyAverageHours: 0,
        currentTotalHours: 0,
      });

      // Check ranking: only > 560 hours (Daniel with 600, Beatriz with 570), sorted descending
      expect(result.ranking).toHaveLength(2);
      expect(result.ranking[0]).toEqual({
        position: 1,
        id: 3,
        firstName: 'Daniel',
        lastName: 'Zapata',
        currentTotalHours: 600,
      });
      expect(result.ranking[1]).toEqual({
        position: 2,
        id: 2,
        firstName: 'Beatriz',
        lastName: 'Benitez',
        currentTotalHours: 570,
      });
    });

    it('should limit ranking to top 5 and assign positions 1 to 5', async () => {
      const mockPeople = Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        first_name: `Pioneer${i + 1}`,
        last_name: `Test${i + 1}`,
        reports: [{ id: 100 + i, hours: 565 + i * 10, month: 1, year: 2026 }],
      }));

      jest.spyOn(mockPrismaService.person, 'findMany').mockResolvedValue(mockPeople);

      const result = await service.getRegularPioneersActivity(1);

      expect(result.ranking).toHaveLength(5);
      expect(result.ranking.map((r) => r.position)).toEqual([1, 2, 3, 4, 5]);
      expect(result.ranking[0].currentTotalHours).toBe(635);
      expect(result.ranking[4].currentTotalHours).toBe(595);
    });

    it('should return empty ranking if no pioneers exceed 560 hours', async () => {
      const mockPeople = [
        {
          id: 1,
          first_name: 'Pioneer',
          last_name: 'Under560',
          reports: [{ id: 101, hours: 560, month: 1, year: 2026 }],
        },
      ];

      jest.spyOn(mockPrismaService.person, 'findMany').mockResolvedValue(mockPeople);

      const result = await service.getRegularPioneersActivity(1);

      expect(result.pioneers).toHaveLength(1);
      expect(result.ranking).toHaveLength(0);
    });
  });
});

