import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

import { UnauthorizedError } from '@/shared/domain';

@Injectable()
export class PermissionsGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { headers, originalUrl } = context.switchToHttp().getRequest();

    if (originalUrl === '/api/v1/healthcheck') return true;

    if (headers.client_id !== process.env.CLIENT_ID)
      throw new UnauthorizedError();

    return true;
  }
}
