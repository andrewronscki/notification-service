import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RedocModule, RedocOptions } from '@nicholas.braun/nestjs-redoc';

export const documentation = async (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Notification Service')
    .setDescription('The notification service API description')
    .setVersion('1.0')
    .addTag('healthcheck')
    .build();

  const redocOptions: RedocOptions = {
    title: 'Notification Service',
    favicon:
      'https://irp.cdn-website.com/8b76e94f/site_favicon_16_1651232151943.ico',
    logo: {
      url: 'https://lirp.cdn-website.com/8b76e94f/dms3rep/multi/opt/logo_4all_meet_future2-1920w.png',
      backgroundColor: '#0492C9',
      altText: 'notification service Logo',
    },
    sortPropsAlphabetically: true,
    hideDownloadButton: false,
    hideHostname: false,
    auth: {
      enabled: true,
      user: 'rute',
      password: 'teste123',
    },
    tagGroups: [
      {
        name: 'Healthcheck resource',
        tags: ['healthcheck'],
      },
      {
        name: 'SMS resources',
        tags: ['sms'],
      },
    ],
  };
  const document = SwaggerModule.createDocument(app, config);
  await RedocModule.setup('/docs', app, document, redocOptions);

  SwaggerModule.setup('docs', app, document);
};
