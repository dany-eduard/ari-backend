import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../src/app.module';
import { PrismaService } from '../../src/prisma/prisma.service';

async function bootstrap() {
  console.log('🌱 Setting Roles to Users...');

  const app = await NestFactory.createApplicationContext(AppModule);
  const prisma = app.get(PrismaService);

  const userMapping = {
    'daniel@ari.com': 'secreatario',
    'gerson@ari.com': 'axiliar del secreatario',
  };

  const users = await prisma.user.findMany({
    where: {
      email: {
        in: Object.keys(userMapping),
      },
    },
  });

  const roles = await prisma.role.findMany({
    where: {
      name: {
        in: Object.values(userMapping),
      },
    },
  });

  for (const user of users) {
    const role = roles.find((role) => role.name === userMapping[user.email]);
    if (!role) {
      console.log(`Role not found for user ${user.email}`);
      continue;
    }
    await prisma.user.update({
      where: { id: user.id },
      data: {
        roles: {
          connect: { id: role.id },
        },
      },
    });
  }

  console.log('✅ Roles and Permissions seeded successfully');
  await app.close();
}

bootstrap().catch((e) => {
  console.error(e);
  process.exit(1);
});
