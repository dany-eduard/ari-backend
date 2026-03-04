import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../src/app.module';
import { PrismaService } from '../../src/prisma/prisma.service';

async function bootstrap() {
  console.log('🌱 Ejecutando seed...');

  const app = await NestFactory.createApplicationContext(AppModule);

  const prisma = app.get(PrismaService);

  const congregation = await prisma.congregation.findFirst({ where: { name: 'El Esfuerzo' } });
  await prisma.logAction.updateMany({ data: { congregation_id: congregation.id } });

  console.log('✅ Seed completado correctamente');

  await app.close();
}

bootstrap().catch((error) => {
  console.error('❌ Error ejecutando seed:', error);
  process.exit(1);
});
