import { Body, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  constructor(
    /**
     * Injecting service
     */
    private readonly userService: UsersService,

    /**
     * Inject PostRepository
     */
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,

    /**
     * Inject MetaOptionRepository
     */
    @InjectRepository(MetaOption)
    private readonly metaOptionRepository: Repository<MetaOption>,
  ) {}

  /**
   * Creating new posts
   * @param createPostDto
   * @returns
   */
  public async create(createPostDto: CreatePostDto) {
    // create Post
    const post = this.postsRepository.create(createPostDto);

    // return the post
    return await this.postsRepository.save(post);
  }

  public findAll(userId: string) {
    // console.log('🚀 ~ PostsService ~ findAll ~ userId:', userId);
    //  Users Service
    // Find A User
    const user = this.userService.findOneById(userId);

    //  Return the
    return [
      {
        user: user,
        title: 'post 1',
        content: 'content 1',
      },
      {
        user: user,
        title: 'post 2',
        content: 'content 2',
      },
    ];
  }

  public createPost(createPostDto: CreatePostDto) {
    console.log(createPostDto);
    return 'Posted created';
  }
}
