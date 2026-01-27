import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../src/app.module';
import { PrismaService } from '../../src/prisma/prisma.service';

async function bootstrap() {
  console.log('🌱 Seeding Roles and Permissions...');

  const app = await NestFactory.createApplicationContext(AppModule);
  const prisma = app.get(PrismaService);

  const permissions = [
    // Persons
    { name: 'PERSON_CREATE', description: 'Crear personas' },
    { name: 'PERSON_READ', description: 'Leer personas' },
    { name: 'PERSON_UPDATE', description: 'Editar personas' },
    { name: 'PERSON_DELETE', description: 'Eliminar personas' },
    // Reports (Registros)
    { name: 'REPORTS_CREATE', description: 'Crear registros de informe' },
    { name: 'REPORTS_READ', description: 'Leer registros de informe' },
    { name: 'REPORTS_UPDATE', description: 'Editar registros de informe' },
    { name: 'REPORTS_DELETE', description: 'Eliminar registros de informe' },
    // Teams (Grupos)
    { name: 'TEAMS_CREATE', description: 'Crear grupos' },
    { name: 'TEAMS_READ', description: 'Leer grupos' },
    { name: 'TEAMS_UPDATE', description: 'Editar grupos' },
    { name: 'TEAMS_DELETE', description: 'Eliminar grupos' },
    // Admin
    { name: 'ADMIN', description: 'Acceso total al sistema' },
  ];

  for (const permission of permissions) {
    await prisma.permission.upsert({
      where: { name: permission.name },
      update: {},
      create: permission,
    });
  }

  const allPermissions = await prisma.permission.findMany();

  const roles = [
    {
      name: 'admin',
      description: 'Administrador total',
      permissionNames: ['ADMIN'],
    },
    {
      name: 'secreatario',
      description: 'Secretario de congregación',
      permissionNames: [
        'PERSON_CREATE',
        'PERSON_READ',
        'PERSON_UPDATE',
        'PERSON_DELETE',
        'REPORTS_CREATE',
        'REPORTS_READ',
        'REPORTS_UPDATE',
        'REPORTS_DELETE',
        'TEAMS_CREATE',
        'TEAMS_READ',
        'TEAMS_UPDATE',
        'TEAMS_DELETE',
      ],
    },
    {
      name: 'axiliar del secreatario',
      description: 'Auxiliar del secretario',
      permissionNames: ['REPORTS_CREATE', 'REPORTS_READ', 'REPORTS_UPDATE', 'REPORTS_DELETE', 'PERSON_READ'],
    },
    {
      name: 'anciano',
      description: 'Anciano de congregación',
      permissionNames: ['PERSON_READ', 'REPORTS_READ', 'TEAMS_READ'],
    },
  ];

  for (const role of roles) {
    const rolePermissions = allPermissions.filter((p) => role.permissionNames.includes(p.name));

    await prisma.role.upsert({
      where: { name: role.name },
      update: {
        permissions: {
          set: rolePermissions.map((p) => ({ id: p.id })),
        },
      },
      create: {
        name: role.name,
        description: role.description,
        permissions: {
          connect: rolePermissions.map((p) => ({ id: p.id })),
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
