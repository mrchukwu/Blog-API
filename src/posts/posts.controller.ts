import { Controller, Get, Post, Param, Body, Patch } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('{/:userId}')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }

  // Swagger Documentation for the createPosts endpoint
  @ApiOperation({
    summary: 'Create A New Post',
    description: 'This endpoint is used to create a new post.',
  })
  @ApiResponse({
    status: 201,
    description: 'You get a 201 response if your post is created successfully',
  })
  @ApiResponse({
    status: 400,
    description:
      'You get a 400 response if your post data is invalid or missing',
  })
  @ApiResponse({
    status: 409,
    description: 'You get a 409 response if your post already exists',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized: You are not logged in',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden: You do not have permission to create a post',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({
    type: CreatePostDto,
    description: 'The body of the post',
    // examples: {
    //   example1: {
    //     value: {
    //       title: 'The Software Engineer',
    //       postType: 'post',
    //       slug: 'the-software-engineer',
    //       status: 'draft',
    //       content: 'The story of a software engineer',
    //       schema:
    //         '{"type":"object","properties":{"name":{"type":"string"},"age":{"type":"number"}}}',
    //       featuredImageUrl: 'https://example.com/the-software-engineer.jpg',
    //       publishOn: '2026-05-18',
    //       tags: ['tag 1', 'tag 2', 'tag 3'],
    //       metaOptions: [
    //         {
    //           key: 'key 1',
    //           value: 'value 1',
    //         },
    //       ],
    //     },
    //   },
    // },
  })
  @Post()
  public createPosts(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @ApiOperation({
    summary: 'Update an existing blog post',
    description: 'This endpoint is used to update an existing blog post.',
  })
  @ApiResponse({
    status: 200,
    description: 'You get a 200 response if your post is updated successfully',
  })
  @ApiResponse({
    status: 400,
    description:
      'You get a 400 response if your post data is invalid or missing',
  })
  @ApiResponse({
    status: 409,
    description: 'You get a 409 response if your post already exists',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized: You are not logged in',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden: You do not have permission to update a post',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  @ApiBody({
    type: PatchPostDto,
    description: 'The body of the post',
  })
  @Patch()
  public updatePost(@Body() patchPostDto: PatchPostDto) {
    console.log(patchPostDto);
    return 'Post updated';
  }
}
