import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { postType } from '../enums/post-type.enum';
import { postStatus } from '../enums/post-status.enum';
import { CreatePostMetaOptionsDto } from './create-post-meta-options.dto';

export class CreatePostDto {
  @ApiProperty({
    type: 'string',
    description: 'The title of the post',
    example: "What's new in NestJS 6",
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4, {
    message: 'Title must be at least 4 characters long',
  })
  @MaxLength(150, {
    message: 'Title must be at most 150 characters long',
  })
  title: string;

  @ApiProperty({
    enum: postType,
    description:
      'The post type must be of the following values (post, page, story, series) ',
    example: 'post',
  })
  @IsEnum(postType, {
    message:
      'Post type must be of the following values (post, page, story, series)',
  })
  @IsNotEmpty()
  postType: postType;

  @ApiProperty({
    type: 'string',
    description: 'The slug of the post',
    example: 'whats-new-in-nestjs-6',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example "my-url" ',
  })
  slug: string;

  @ApiProperty({
    enum: postStatus,
    description:
      'Post status must be of the following values (draft, scheduled, review, published)',
    example: 'draft',
  })
  @IsEnum(postStatus, {
    message:
      'Post status must be of the following values (draft, scheduled, review, published)',
  })
  @IsNotEmpty()
  status: postStatus;

  @ApiPropertyOptional({
    type: 'string',
    description: 'The content of the post',
    example: "What's new in NestJS 6 and how it scales application",
  })
  @IsString()
  @IsOptional()
  @MinLength(10, {
    message: 'Content must be at least 10 characters long',
  })
  @MaxLength(3000, {
    message: 'Content must be at most 5000 characters long',
  })
  content?: string;

  @ApiPropertyOptional({
    type: 'string',
    description: `
    Serialize your JSON object else a validation error will be thrown.
    JSON schema definition for posts additional fields. 
    This is used to define the custom fields for different post types.
    For example, a 'book' post type might have 'isbn' and 'author' fields,
    while a 'movie' post type might have 'director' and 'rating' fields.
    `,
    example: `
    {
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "age": {
      "type": "number"
    }
  }
}

    `,
  })
  @IsString()
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional({
    type: 'string',
    description: 'The featured image url of the post',
    example: 'https://example.com/the-software-engineer.jpg',
  })
  @IsString()
  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string;

  @ApiPropertyOptional({
    type: 'string',
    description: 'The published date of the post',
    example: '2025-12-25T12:00:00.000Z',
  })
  // @Type(() => Date)
  @IsISO8601()
  @IsOptional()
  publishOn?: Date;

  @ApiPropertyOptional({
    type: [String],
    description: 'The tags of the post',
    example: ['NestJs', 'Nodejs', 'TypeScript'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];

  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description:
            'The key can be any string identifier for your meta option',
          example: 'sidebarEnabled',
        },
        value: {
          type: 'string',
          description: 'Any value you want to save to the key',
          example: true,
        },
      },
    },
    description: 'The meta options of the post',
    example: [
      {
        key: 'canonical',
        value: 'https://example.com/post',
      },
    ],
  })
  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto[];
}
