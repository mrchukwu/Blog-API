import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostMetaOptionsDto {
  @ApiProperty({
    description: 'The key of the meta option',
    example: 'canonical',
  })
  @IsString()
  @IsNotEmpty()
  key: string;

  @ApiProperty({
    description: 'The value of the meta option',
    example: 'https://example.com/post',
  })
  @IsNotEmpty()
  value: any;
}
