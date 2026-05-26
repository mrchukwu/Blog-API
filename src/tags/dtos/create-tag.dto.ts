import {
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTagDto {
  @ApiProperty({
    type: 'string',
    description: 'The name of the tag',
    example: 'Technology',
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(256, {
    message: 'name must be at most 256 characters long',
  })
  name: string;

  @ApiProperty({
    type: 'string',
    description: 'The slug of the tag',
    example: 'technology',
  })
  @ApiProperty({
    type: 'string',
    description: 'The slug of the post',
    example: 'whats-new-in-nestjs-6',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(256, {
    message: 'Slug must be at most 256 characters long',
  })
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example "my-url" ',
  })
  slug: string;

  @ApiPropertyOptional({
    description: 'description',
    example: 'Technology',
  })
  @IsOptional()
  @IsString()
  @MinLength(3)
  @MaxLength(256, {
    message: 'description must be at most 256 characters long',
  })
  description?: string;

  @ApiPropertyOptional({
    type: 'string',
    description: 'schema',
    example: 'schema',
  })
  @IsJSON()
  @IsOptional()
  schema?: string;

  @ApiPropertyOptional({
    type: 'string',
    description: 'featuredImageUrl',
    example: 'featuredImageUrl',
  })
  @IsString()
  @IsOptional()
  @IsUrl()
  @MaxLength(1024, {
    message: 'featuredImageUrl must be at most 1024 characters long',
  })
  featuredImageUrl?: string;
}
