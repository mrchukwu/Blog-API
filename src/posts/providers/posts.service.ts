import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';

@Injectable()
export class PostsService {
  //  Injecting UsersService
  constructor(private readonly userService: UsersService) {}
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
