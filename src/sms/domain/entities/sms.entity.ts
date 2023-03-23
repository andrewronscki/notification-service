import { InvalidParamError } from '@/shared/domain';
import { ApiProperty } from '@nestjs/swagger';

export class SmsEntity {
  @ApiProperty()
  public requestId: string;

  @ApiProperty()
  public messageId: string;

  @ApiProperty()
  public message: string;

  @ApiProperty()
  public phone: string;

  constructor(data: SmsEntity.Data) {
    this.validate(data);
    this.requestId = data.requestId;
    this.messageId = data.messageId;
    this.message = data.message;
    this.phone = data.phone;
  }

  private validate(data: SmsEntity.Data): void {
    if (!data.requestId) throw new InvalidParamError('requestId');
    if (!data.messageId) throw new InvalidParamError('messageId');
    if (!data.message) throw new InvalidParamError('message');
    if (!data.phone) throw new InvalidParamError('phone');
  }
}

export namespace SmsEntity {
  export interface Data {
    requestId: string;
    messageId: string;
    message: string;
    phone: string;
  }
}
