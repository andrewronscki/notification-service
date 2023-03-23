import { Inject, Injectable } from '@nestjs/common';

import {
  ICreateSms,
  SmsEntity,
  SmsRepository,
  SmsRepositoryToken,
} from '@/sms/domain';
import { CreateSmsError } from '../errors';

@Injectable()
export class CreateSms {
  constructor(
    @Inject(SmsRepositoryToken)
    private readonly smsRepository: SmsRepository,
  ) {}

  async execute(payload: ICreateSms): Promise<SmsEntity> {
    const sentSms = await this.smsRepository.create(payload);

    if (!sentSms) throw new CreateSmsError();

    return sentSms;
  }
}
