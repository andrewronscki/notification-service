import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

import { ICreateSms } from '@/sms/domain';

export class CreateSmsDto implements ICreateSms {
  @ApiProperty()
  @IsString({ message: 'O campo phone deve ser string.' })
  @IsNotEmpty({ message: 'O campo phone não pode ser vazio.' })
  phone: string;

  @ApiProperty()
  @IsString({ message: 'O campo message deve ser string.' })
  @IsNotEmpty({ message: 'O campo message não pode ser vazio.' })
  message: string;
}
