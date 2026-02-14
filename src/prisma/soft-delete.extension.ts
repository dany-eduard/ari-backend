import { PrismaClient, Prisma } from '@prisma/client';

// Prisma Client Extensions: Soft Delete default behavior
export const softDeleteExtension = Prisma.defineExtension((prisma) => {
  return prisma.$extends({
    name: 'softDelete',
    query: {
      $allModels: {
        async $allOperations({ model, operation, args, query }) {
          const _args = args as any;
          const _prisma = prisma as any;

          // PascalCase (schema) to camelCase (client)
          const modelKey = model.charAt(0).toLowerCase() + model.slice(1);

          const applySoftDeleteRecursively = (obj: any, parentKey?: string) => {
            if (!obj || typeof obj !== 'object') return;

            const toManyRelations = [
              'people',
              'teams',
              'users',
              'reports',
              'permissions',
              'roles',
              'congregations',
              'logActions',
            ];

            const isKnownToMany = (key: string) => toManyRelations.includes(key);

            for (const key of ['include', 'select']) {
              if (obj[key] && typeof obj[key] === 'object') {
                for (const rel in obj[key]) {
                  const value = obj[key][rel];

                  if (rel === '_count') {
                    applySoftDeleteRecursively(value, rel);
                    continue;
                  }

                  // Heuristic to check if it's a to-many relation or should be treated as such
                  const isToMany =
                    isKnownToMany(rel) ||
                    (typeof value === 'object' &&
                      value !== null &&
                      (value.where !== undefined ||
                        value.take !== undefined ||
                        value.skip !== undefined ||
                        value.orderBy !== undefined));

                  if (isToMany) {
                    if (value === true) {
                      obj[key][rel] = { where: { deletedAt: null } };
                    } else if (typeof value === 'object' && value !== null) {
                      if (!value.where) value.where = {};
                      if (value.where.deletedAt === undefined) {
                        value.where.deletedAt = null;
                      }
                      applySoftDeleteRecursively(value, rel);
                    }
                  } else {
                    // To-One relation or other field.
                    // We only recurse if it's an object (to handle nested relations)
                    if (typeof value === 'object' && value !== null) {
                      applySoftDeleteRecursively(value, rel);
                    }
                  }
                }
              }
            }
          };

          // Operations that should filter out deleted records by default
          const filterOperations = [
            'findFirst',
            'findFirstOrThrow',
            'findMany',
            'count',
            'aggregate',
            'groupBy',
            'update',
            'updateMany',
          ];

          if (filterOperations.includes(operation)) {
            // Only add deletedAt: null if it's not already specified in the where clause
            if (_args.where?.deletedAt === undefined) {
              _args.where = { ..._args.where, deletedAt: null };
            }
            applySoftDeleteRecursively(_args);
            return query(_args);
          }

          // findUnique operations: Convert to findFirst to allow filtering by deletedAt
          if (operation === 'findUnique' || operation === 'findUniqueOrThrow') {
            const newOperation = operation === 'findUnique' ? 'findFirst' : 'findFirstOrThrow';

            if (_args.where?.deletedAt === undefined) {
              _args.where = { ..._args.where, deletedAt: null };
            }
            applySoftDeleteRecursively(_args);

            return _prisma[modelKey][newOperation](_args);
          }

          // soft-delete cascades
          const cascadeMap: Record<string, { model: string; foreignKey: string }[]> = {
            Person: [{ model: 'publisherReport', foreignKey: 'person_id' }],
            Team: [{ model: 'person', foreignKey: 'team_id' }],
            Congregation: [
              { model: 'user', foreignKey: 'congregation_id' },
              { model: 'team', foreignKey: 'congregation_id' },
              { model: 'person', foreignKey: 'congregation_id' },
            ],
          };

          // delete operations: Convert to update with deletedAt timestamp
          if (operation === 'delete') {
            const deletedAt = new Date();
            const modelCascades = cascadeMap[model];

            if (modelCascades) {
              const record = await _prisma[modelKey].findUnique({
                where: _args.where,
                select: { id: true },
              });
              if (record) {
                for (const cascade of modelCascades) {
                  await _prisma[cascade.model].deleteMany({
                    where: { [cascade.foreignKey]: record.id },
                  });
                }
              }
            }

            return _prisma[modelKey].update({
              where: _args.where,
              data: { deletedAt },
            });
          }

          // deleteMany operations: Convert to updateMany with deletedAt timestamp
          if (operation === 'deleteMany') {
            const deletedAt = new Date();
            const modelCascades = cascadeMap[model];

            if (modelCascades) {
              const records = await _prisma[modelKey].findMany({
                where: _args.where,
                select: { id: true },
              });
              const ids = records.map((r: any) => r.id);
              if (ids.length > 0) {
                for (const cascade of modelCascades) {
                  await _prisma[cascade.model].deleteMany({
                    where: { [cascade.foreignKey]: { in: ids } },
                  });
                }
              }
            }

            return _prisma[modelKey].updateMany({
              where: _args.where,
              data: { deletedAt },
            });
          }

          return query(args);
        },
      },
    },
  });
});
