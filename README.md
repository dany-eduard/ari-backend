# ARI Backend

API back-end para gestionar congregaciones, grupos, personas y reportes de publicadores. Desarrollado con NestJS y Prisma sobre PostgreSQL. Incluye generación de PDFs y archivos ZIP para reportes, y auditoría de acciones de usuario.

## Tabla de contenidos

- [Resumen](#resumen)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso y ejecución](#uso-y-ejecución)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Entidades y Modelo de datos](#entidades-y-modelo-de-datos)
- [Migrations y Seeds](#migrations-y-seeds)
- [Pruebas](#pruebas)
- [Contribución](#contribución)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Resumen

- Backend construido con NestJS para ofrecer una API REST que gestiona:
  - Congregaciones, grupos y personas
  - Usuarios con autenticación y roles/permisos
  - Informes de publicadores por año/mes, con generación de PDFs y ZIPs
- Modelo de datos gestionado con Prisma y PostgreSQL.
- Soporte de seguridad mediante JWT y validación de datos en DTOs.

## Tecnologías

- Node.js
- NestJS
- TypeScript
- Prisma ORM (PostgreSQL)
- PostgreSQL (pg)
- Puppeteer (generación de PDFs)
- Handlebars (plantillas para PDFs)
- Archiver (generación de ZIPs)
- Bcrypt (hash de contraseñas)
- Passport y JWT (autenticación)
- RxJS (NestJS)

## Requisitos

- Node.js (versión recomendada: 20+ según tu entorno)
- PostgreSQL funcionando y accesible
- Git (opcional, para clonar y gestionar el código)

## Instalación

1. Clona el repositorio y accede a su carpeta:

```bash
git clone git@github.com:dany-eduard/ari-backend.git
cd ari-backend
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura las variables de entorno (archivo `.env`):

```env
DATABASE_URL=postgresql://user:password@localhost:5432/ari
FRONTEND_URL=http://localhost:5173
PORT=3000
JWT_SECRET=tu_secreto
JWT_EXPIRES_IN=1d
NODE_ENV=development
```

Opcional: puedes usar un archivo `.env.example` como plantilla.

## Configuración de base de datos

- Prisma maneja el esquema de la BD y las migraciones.
- Para aplicar migraciones en desarrollo, ejecuta:

```bash
npx prisma migrate dev
```

- Para producción (despliegues), usa:

```bash
npx prisma migrate deploy
```

- Genera el cliente de Prisma:

```bash
npm run build
```

- Seed de datos (datos iniciales):

```bash
npx prisma db seed
```

## Uso y ejecución

- Modo desarrollo (con recarga en cambios):

```bash
npm run start:dev
```

- Modo producción (compilado):

```bash
npm run build
npm run start:prod
```

- Pruebas:

```bash
npm test
npm run test:cov
```

- Formato y linting:

```bash
npm run format
npm run lint
```

## Estructura del proyecto

```text
.
├── prisma/
│   ├── migrations/          # Historia de migraciones de la BD
│   ├── seeds/               # Scripts de seeds para datos de ejemplo
│   └── schema.prisma        # Modelo de datos (User, Congregation, Team, Person, etc.)
└── src/
    ├── app.module.ts        # Módulo raíz que importa todos los módulos de negocio
    ├── main.ts              # Punto de entrada de la aplicación
    └── modules/
        ├── auth/            # Autenticación (registro, login, perfil)
        ├── congregation/    # Gestión de congregaciones
        ├── log-actions/     # Auditoría de acciones del sistema
        ├── permissions/     # Permisos
        ├── person/          # Gestión de personas
        ├── publisher-report/ # Gestión de informes de publicadores
        ├── reports/         # Generación de PDFs y ZIPs de informes
        ├── roles/           # Roles y permisos
        ├── team/            # Gestión de grupos
        └── users/           # Usuarios y asignación de roles
```

# Modelos y entidades (resumen)

- `User`: usuario de la aplicación, relacionado con `Congregation` y `Roles`
- `Congregation`: agrupación de usuarios, con código y relaciones
- `Team`: grupo dentro de una `Congregation`
- `Person`: individuo perteneciente a una `Congregation` y a un `Team`
- `PublisherReport`: informe de publicadores por año/mes
- `LogAction`: auditoría de acciones de usuarios
- `Role/Permission`: sistema de control de acceso y permisos por roles

## Migrations y Seeds

- Las migraciones se encuentran en `prisma/migrations` y permiten versionar el esquema de la BD.
- Seeds útiles para arrancar datos de ejemplo se encuentran en `prisma/seeds`. Estos pueden usarse para populación inicial de datos durante el desarrollo.

## Pruebas

- Las pruebas usan Jest y siguen la convención de archivos `*.spec.ts` dentro de `src`. Ejecuta `npm test` para correr unit tests y `npm run test:cov` para cobertura.

## Seguridad y buenas prácticas

- Contraseñas se almacenan de forma segura con bcrypt.
- Autenticación basada en JWT (Passport + JWT Strategy).
- CORS configurado para permitir solo el origen del frontend indicado en `FRONTEND_URL`.
- Las rutas y operaciones sensibles deben incluir autorización y validación de datos (DTOs con class-validator).

## Compatibilidad y despliegue

- El proyecto está preparado para desplegarse en entornos con Node.js y PostgreSQL, y puede integrarse con herramientas modernas de despliegue.
- Las variables de entorno deben estar definidas en el entorno de ejecución; si se desea, se pueden añadir contenedores docker o servicios en la nube para el DB.

## Contribución

- Si quieres contribuir, por favor abre un PR con una breve descripción de los cambios y añade pruebas cuando aplique.
- Asegúrate de ejecutar lint y pruebas antes de enviar cambios.

## Licencia

Este proyecto está licenciado bajo la GNU General Public License v3.0 (GPL-3.0). Consulta el archivo LICENSE en la raíz del repositorio para obtener el texto completo de la licencia.

## Contacto

- Equipo de desarrollo: Daniel Eduardo Almagro <danyeduar17@gmail.com>
- Compartir feedback: correos o canales de comunicación del proyecto
