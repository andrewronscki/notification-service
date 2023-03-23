import { BusinessError } from '@/shared/domain';

export class CreateSmsError extends BusinessError {
  constructor() {
    super('Create sms error.');
  }
}
