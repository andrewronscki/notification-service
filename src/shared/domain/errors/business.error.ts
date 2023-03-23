import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class BusinessError extends HttpException {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public message: string;

  constructor(private readonly errorMessage: string) {
    super(errorMessage, HttpStatus.UNPROCESSABLE_ENTITY);
    this.name = this.constructor.name;
  }
}
