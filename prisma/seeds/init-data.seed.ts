import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../src/app.module';
import { AuthService } from '../../src/modules/auth/auth.service';
import { CongregationService } from '../../src/modules/congregation/congregation.service';
import { TeamService } from '../../src/modules/team/team.service';
import { PersonService } from '../../src/modules/person/person.service';
import { PrismaService } from '../../src/prisma/prisma.service';
import { PersonDto } from 'src/modules/person/dto/person.dto';

async function bootstrap() {
  console.log('🌱 Ejecutando seed...');

  const app = await NestFactory.createApplicationContext(AppModule);

  const prisma = app.get(PrismaService);
  const authService = app.get(AuthService);
  const congregationService = app.get(CongregationService);
  const teamService = app.get(TeamService);
  const personService = app.get(PersonService);

  // 1️⃣ Congregación
  const congregationName = 'El Esfuerzo';
  let congregation = await prisma.congregation.findFirst({
    where: { name: congregationName },
  });

  if (!congregation) {
    congregation = await congregationService.create({
      name: congregationName,
      code: '19661',
    });
    console.log(`✅ Congregación creada: ${congregation.name}`);
  } else {
    console.log(`ℹ️ La congregación ${congregation.id} "${congregation.name}" ya existe.`);
  }

  // // 2️⃣ Usuarios
  // const users = [
  //   {
  //     email: 'admin@ari.com',
  //     password: 'Qwerty23*',
  //     first_name: 'Admin',
  //     last_name: 'El Esfuerzo',
  //     congregation_id: congregation.id,
  //   },
  // ];

  // for (const userData of users) {
  //   const existingUser = await prisma.user.findUnique({
  //     where: { email: userData.email },
  //   });

  //   if (!existingUser) {
  //     await authService.register(userData);
  //     console.log(`✅ Usuario creado: ${userData.email}`);
  //   } else {
  //     console.log(`ℹ️ El usuario ${userData.email} ya existe.`);
  //   }
  // }

  // 3️⃣ Equipos / Grupos
  const teamNames = [
    'Grupo 1 - Jesús De Las Salas',
    'Grupo 2 - Daniel Almagro',
    'Grupo 3 - Cristian Osorio',
    'Grupo 4 - John Huerta',
  ];

  for await (const name of teamNames) {
    const existingTeam = await prisma.team.findFirst({
      where: { name, congregation_id: congregation.id },
    });

    if (!existingTeam) {
      await teamService.create({
        name,
        congregation_id: congregation.id,
      });
      console.log(`✅ Equipo creado: ${name}`);
    } else {
      console.log(`ℹ️ El equipo "${name}" ya existe.`);
    }
  }

  console.log('✅ Seed completado correctamente');

  await app.close();
}

bootstrap().catch((error) => {
  console.error('❌ Error ejecutando seed:', error);
  process.exit(1);
});
