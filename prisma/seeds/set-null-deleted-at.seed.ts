import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../src/app.module';
import { PrismaService } from '../../src/prisma/prisma.service';

async function bootstrap() {
  console.log('🌱 Ejecutando seed...');

  const app = await NestFactory.createApplicationContext(AppModule);

  const prisma = app.get(PrismaService);

  const where = { OR: [{ deletedAt: null }, { deletedAt: { not: null } }] };

  await prisma.user.updateMany({ where, data: { deletedAt: null } });
  await prisma.congregation.updateMany({ where, data: { deletedAt: null } });
  await prisma.team.updateMany({ where, data: { deletedAt: null } });
  await prisma.person.updateMany({ where, data: { deletedAt: null } });
  await prisma.publisherReport.updateMany({ where, data: { deletedAt: null } });
  await prisma.logAction.updateMany({ where, data: { deletedAt: null } });
  await prisma.role.updateMany({ where, data: { deletedAt: null } });
  await prisma.permission.updateMany({ where, data: { deletedAt: null } });

  console.log('✅ Seed completado correctamente');

  await app.close();
}

bootstrap().catch((error) => {
  console.error('❌ Error ejecutando seed:', error);
  process.exit(1);
});
