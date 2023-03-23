import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule, HttpExceptionFilter } from '@/shared/presenters';

import { documentation } from './documentation';
import { PermissionsGuard } from './auth/presenters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'api/v',
    defaultVersion: '1',
  });
  app.useGlobalGuards(new PermissionsGuard());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  await documentation(app);

  await app.listen(process.env.APP_PORT);
}
bootstrap();
