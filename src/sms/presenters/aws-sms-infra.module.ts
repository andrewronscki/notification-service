import { Module } from '@nestjs/common';

import { SmsRepositoryToken } from '../domain';
import { SnsSmsRepository } from '../infra';

@Module({
  imports: [],
  providers: [
    SnsSmsRepository,
    {
      provide: SmsRepositoryToken,
      useExisting: SnsSmsRepository,
    },
  ],
  exports: [SmsRepositoryToken],
})
export class AwsSmsInfraModule {}
