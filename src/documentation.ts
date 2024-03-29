import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RedocModule, RedocOptions } from '@nicholas.braun/nestjs-redoc';

export const documentation = async (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Notification Service')
    .setDescription('The notification service API description')
    .setVersion('1.0.0')
    .addTag('healthcheck')
    .addTag('sms')
    .build();

  const redocOptions: RedocOptions = {
    title: 'Notification Service',
    logo: {
      url: 'https://redocly.github.io/redoc/petstore-logo.png',
      backgroundColor: '#FFF',
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
