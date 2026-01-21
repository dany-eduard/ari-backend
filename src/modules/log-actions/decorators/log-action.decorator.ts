import { SetMetadata } from '@nestjs/common';
import { Action } from '@prisma/client';

export const LOG_ACTION_KEY = 'log_action';

export interface LogActionMetadata {
  action: Action;
  entity: string;
}

export const LogAction = (data: LogActionMetadata) => SetMetadata(LOG_ACTION_KEY, data);
