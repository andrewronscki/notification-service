import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

import { UnauthorizedError } from '@/shared/domain';

@Injectable()
export class PermissionsGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { headers } = context.switchToHttp().getRequest();

    if (headers.client_id !== process.env.CLIENT_ID)
      throw new UnauthorizedError();

    return true;
  }
}
