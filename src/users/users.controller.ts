import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiTags, ApiQuery, ApiOperation, ApiResponse } from '@nestjs/swagger';
// http:localhost:300/users

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  // @Get('{/:id}') //creating optional param
  @Get('{/:id}')
  @ApiOperation({
    summary: 'Fetches a list of registered users on the application',
    description:
      'Returns all users that have registered on the application, use the limit and page query params to control the number of users returned',
  })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully based on the queries',
  })
  @ApiResponse({
    status: 404,
    description: 'No users found matching the supplied query',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    description: 'The number of emntries returned per query',
    required: false,
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    description:
      'The position of the page number that you want the API to return',
    required: false,
    example: 1,
  })
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(getUsersParamDto, limit, page);
  }

  @Post()
  @ApiOperation({
    summary: 'Creates a new user',
    description: 'Creates a new user with the provided details',
  })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid user data',
  })
  @ApiResponse({
    status: 409,
    description: 'User already exists',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized: You are not logged in',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden: You do not have permission to create a user',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  public createUsers(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'You sent a post request to users endpoint';
  }

  @Put()
  public updateUsers() {
    return 'You sent a put request to users endpoint';
  }

  @Patch()
  public patchUsers(@Body() patchUserDto: PatchUserDto) {
    console.log(patchUserDto);
    return patchUserDto;
  }

  @Delete()
  public deleteUsers() {
    return 'You sent a delete request to users endpoint';
  }
}
