import 'dotenv/config';
import { spawnSync } from 'child_process';
import { join } from 'path';

async function main() {
  // Prisma appends arguments after the seed command.
  // Con 'ts-node main.ts arg', arg es process.argv[2]
  const arg = process.argv[2];
  const seedFile = arg || 'init-data.seed.ts';

  // Limpiar el nombre del archivo (quitar leading slash si existe)
  const cleanSeedFile = seedFile.startsWith('/') ? seedFile.slice(1) : seedFile;
  const seedPath = join(__dirname, cleanSeedFile);

  console.log(`🌱 Sembrador: ${cleanSeedFile}`);
  console.log(`📂 Ruta: ${seedPath}`);

  const result = spawnSync('npx', ['ts-node', '-r', 'tsconfig-paths/register', seedPath], {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env },
  });

  if (result.error) {
    console.error('❌ Error al ejecutar el seed:', result.error);
    process.exit(1);
  }

  process.exit(result.status || 0);
}

main();
