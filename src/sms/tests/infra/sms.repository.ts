import { ICreateSms, SmsEntity, SmsRepository } from '@/sms/domain';

export class FakeSmsRepository implements SmsRepository {
  async create(data: ICreateSms): Promise<SmsEntity> {
    return;
  }
}
