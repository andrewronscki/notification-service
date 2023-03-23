import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

import { CreateSms, CreateSmsError } from '../data';
import { SmsEntity } from '../domain';
import { CreateSmsDto } from './dtos';

@ApiTags('sms')
@ApiInternalServerErrorResponse({ description: 'Internal server error.' })
@Controller('sms')
export class SmsController {
  constructor(private readonly createSms: CreateSms) {}

  @ApiOperation({ summary: 'Send SMS' })
  @ApiCreatedResponse({ description: 'SMS sent.', type: SmsEntity })
  @ApiBadRequestResponse({
    description: 'Bad request error',
    type: CreateSmsError,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Business error.',
    type: CreateSmsError,
  })
  @Post()
  async createCatWithUseCase(
    @Body() payload: CreateSmsDto,
  ): Promise<SmsEntity> {
    return await this.createSms.execute(payload);
  }
}
