import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

/**
 * Class to connect to Users table and perform business operations
 * @class UsersService
 * @constructor
 * @memberof module:users/providers
 */
@Injectable()
export class UsersService {
  /**
   * Creates an instance of UsersService
   * @param authService - The AuthService to inject
   * @returns Instance of UsersService
   */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  /**
   * Find all users
   * @param getUsersParamDto - The parameters to filter the users by
   * @param limit - The limit of users to return
   * @param page - The page of users to return
   * @returns Array of users
   */
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);

    return [
      {
        firstName: 'John',
        lastName: 'john@doe.com',
      },
      {
        firstName: 'kennedy',
        lastName: 'ken@chukwu.com',
      },
    ];
  }

  /**
   * Finding a single user using the ID of the user
   * @param id - The ID of the user to find
   * @returns User object
   */
  public findOneById(id: string) {
    return {
      id: 1234,
      firstName: 'John',
      lastName: 'john@doe.com',
    };
  }
}
