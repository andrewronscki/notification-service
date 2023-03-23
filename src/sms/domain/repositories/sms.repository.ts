import { SmsEntity } from '../entities';
import { ICreateSms } from '../interfaces';

export const SmsRepositoryToken = Symbol('SmsRepository');
export interface SmsRepository {
  create: (data: ICreateSms) => Promise<SmsEntity>;
}
