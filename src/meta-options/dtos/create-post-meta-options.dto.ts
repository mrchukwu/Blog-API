import { IsJSON, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostMetaOptionsDto {
  @ApiProperty({
    type: 'string',
    description: 'The meta value of the post',
  })
  @IsNotEmpty()
  @IsJSON()
  metaValue: string;
}
