import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Action } from '@prisma/client';

@Injectable()
export class LogActionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: {
    user_id: number;
    action: Action;
    entity: string;
    entity_id?: number | null;
    before?: any;
    after?: any;
    ip?: string;
  }) {
    return this.prisma.logAction.create({
      data: {
        user_id: data.user_id,
        action: data.action,
        entity: data.entity,
        entity_id: data.entity_id,
        before: data.before,
        after: data.after,
        ip: data.ip,
      },
    });
  }

  async findAll(query: { page?: number; limit?: number }) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 5;
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.prisma.logAction.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          action: true,
          entity: true,
          entity_id: true,
          after: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              first_name: true,
              last_name: true,
            },
          },
        },
      }),
      this.prisma.logAction.count(),
    ]);

    await Promise.all(
      data.map(async (log: any) => {
        if (log.entity === 'PublisherReport' && log.entity_id) {
          const report = await this.prisma.publisherReport.findUnique({
            where: { id: Number(log.entity_id) },
            select: {
              person: {
                select: { first_name: true, last_name: true },
              },
            },
          });
          if (report?.person) {
            log.person_name = `${report.person.first_name} ${report.person.last_name}`;
          }
        } else if (log.entity === 'Person' && log.entity_id) {
          const person = await this.prisma.person.findUnique({
            where: { id: Number(log.entity_id) },
            select: { first_name: true, last_name: true },
          });
          if (person) {
            log.person_name = `${person.first_name} ${person.last_name}`;
          }
        }
      }),
    );

    return {
      data,
      meta: {
        total,
        page,
        last_page: Math.ceil(total / limit),
      },
    };
  }
}
