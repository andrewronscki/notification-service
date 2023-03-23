import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AwsSmsInfraModule, SmsModule } from '@/sms/presenters';

import { AppController } from './app.controller';
import { AppService } from '../data/services';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SmsModule.withInfrastructure([AwsSmsInfraModule]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
