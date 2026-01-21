import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { tap } from 'rxjs/operators';
import { LOG_ACTION_KEY, LogActionMetadata } from './decorators/log-action.decorator';
import { LogActionsService } from './log-actions.service';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class LogActionsInterceptor implements NestInterceptor {
  constructor(
    private readonly reflector: Reflector,
    private readonly logService: LogActionsService,
    private readonly prisma: PrismaService,
  ) {}

  async intercept(context: ExecutionContext, next: CallHandler) {
    const req = context.switchToHttp().getRequest();
    const handler = context.getHandler();

    const metadata = this.reflector.get<LogActionMetadata>(LOG_ACTION_KEY, handler);
    if (!metadata) {
      return next.handle();
    }

    const user = req.user;
    const ip = req.ip;

    const { action, entity } = metadata;
    let before = null;

    if (action === 'UPDATE' || action === 'DELETE') {
      const id = req.params.id;
      if (id) {
        try {
          // Map EntityName to prisma delegate (e.g. Team -> team)
          const delegateName = entity.charAt(0).toLowerCase() + entity.slice(1);
          before = await this.prisma[delegateName].findUnique({
            where: { id: Number(id) },
          });
        } catch (error) {
          console.error(`Error fetching 'before' state for ${entity}:`, error);
        }
      }
    }

    return next.handle().pipe(
      tap(async (result) => {
        if (!user || !user.id) {
          // If no user is authenticated or id is missing, we skip logging.
          return;
        }

        try {
          await this.logService.create({
            user_id: user.id,
            action: metadata.action,
            entity: metadata.entity,
            entity_id: result?.id ? Number(result.id) : null,
            before,
            after: result,
            ip,
          });
        } catch (error) {
          console.error('Error logging action:', error);
          // We don't want to break the main request if logging fails
        }
      }),
    );
  }
}
