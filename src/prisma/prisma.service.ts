import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { softDeleteExtension } from './soft-delete.extension';

@Injectable()
export class PrismaService {
  private readonly prisma: any;

  constructor() {
    const connectionString = process.env.DATABASE_URL;
    const pool = new Pool({
      connectionString,
      ssl: process.env.NODE_ENV?.toLowerCase() === 'production' ? { rejectUnauthorized: false } : false,
    });
    const adapter = new PrismaPg(pool);
    const baseClient = new PrismaClient({ adapter });
    this.prisma = baseClient.$extends(softDeleteExtension);
  }

  get user() {
    return this.prisma.user;
  }
  get congregation() {
    return this.prisma.congregation;
  }
  get team() {
    return this.prisma.team;
  }
  get person() {
    return this.prisma.person;
  }
  get publisherReport() {
    return this.prisma.publisherReport;
  }
  get logAction() {
    return this.prisma.logAction;
  }
  get role() {
    return this.prisma.role;
  }
  get permission() {
    return this.prisma.permission;
  }

  get $transaction() {
    return this.prisma.$transaction.bind(this.prisma);
  }
  get $queryRaw() {
    return this.prisma.$queryRaw.bind(this.prisma);
  }
  get $executeRaw() {
    return this.prisma.$executeRaw.bind(this.prisma);
  }
}
