import { ICreateSms, SmsRepository, SmsEntity } from '@/sms/domain';
import { SNS } from 'aws-sdk';

export class SnsSmsRepository implements SmsRepository {
  private client: SNS;

  constructor() {
    this.client = new SNS({
      apiVersion: '2010-03-31',
      region: process.env.AWS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_KEY_ID,
    });
  }

  async create(data: ICreateSms): Promise<SmsEntity> {
    const params = {
      Message: data.message,
      PhoneNumber: data.phone,
    };

    return await this.client
      .publish(params)
      .promise()
      .then((response) => {
        return new SmsEntity({
          messageId: response.MessageId,
          requestId: response.$response.requestId,
          message: data.message,
          phone: data.phone,
        });
      })
      .catch(() => {
        return null;
      });
  }
}
