import { DynamicModule, Module, ModuleMetadata } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CreateSms } from '../data';

import { SmsController } from './sms.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [SmsController],
  providers: [CreateSms],
})
export class SmsModule {
  static withInfrastructure(
    infrastructure: ModuleMetadata['imports'],
  ): DynamicModule {
    infrastructure = infrastructure ?? [];
    return {
      module: SmsModule,
      imports: [...infrastructure],
    };
  }
}
