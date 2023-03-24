import { v4 } from 'uuid';

import { CreateSms, CreateSmsError } from '@/sms/data';
import { FakeSmsRepository } from '../infra';
import { ICreateSms, SmsEntity, SmsRepository } from '@/sms/domain';

type SutTypes = {
  sut: CreateSms;
  smsRepository: SmsRepository;
};

const makeSut = (): SutTypes => {
  const smsRepository = new FakeSmsRepository();

  const sut = new CreateSms(smsRepository);
  return { sut, smsRepository };
};

describe('Create sms use case', () => {
  it('should not be able create a sms if not return sms entity from repository', async () => {
    const { sut, smsRepository } = makeSut();

    jest
      .spyOn(smsRepository, 'create')
      .mockImplementationOnce(async () => undefined);

    await expect(
      sut.execute({
        message: 'test',
        phone: '+5548999999999',
      }),
    ).rejects.toThrow(CreateSmsError);
  });

  it('should be able create sms', async () => {
    const { sut, smsRepository } = makeSut();

    const data: ICreateSms = {
      message: 'test',
      phone: '+5548999999999',
    };

    jest
      .spyOn(smsRepository, 'create')
      .mockImplementationOnce(
        async () =>
          new SmsEntity({ ...data, messageId: v4(), requestId: v4() }),
      );

    const response = await sut.execute(data);

    expect(response).toHaveProperty('messageId');
    expect(response).toHaveProperty('requestId');
    expect(response).toHaveProperty('message');
    expect(response).toHaveProperty('phone');
  });
});
