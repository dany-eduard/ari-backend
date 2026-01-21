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
}
