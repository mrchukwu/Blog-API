import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

/**
 * Class to connect to Users table and perform business operations
 *
 * @class
 * @description Provides methods for user management including finding all users
 *              and finding users by ID. Handles database operations for the
 *              users table.
 *
 * @category Services
 * @since 1.0.0
 * constructor(private readonly usersService: UsersService) {}
 *
 * const users = await usersService.findAll({ role: 'student' }, 10, 1);
 * ```
 */
@Injectable()
export class UsersService {
  /**
   * Creates an instance of UsersService
   *
   * @constructor
   * @description Injects the AuthService to handle authentication checks
   *
   * @param authService - The authentication service for verifying user credentials
   *
   * @remarks
   * Uses forwardRef to resolve circular dependency between UsersModule and AuthModule
   */
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  /**
   * @description This method is used to find all users
   * @method findAll
   * @param {GetUsersParamDto} getUsersParamDto - The parameters to filter the users by
   * @param {number} limit - The limit of users to return
   * @param {number} page - The page of users to return
   * @returns array of users
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
   * @description This method is used to find a user by ID
   * @method findOneById
   * @param id: string - The ID of the user to find
   * @returns user object
   */
  public findOneById(id: string) {
    return {
      id: 1234,
      firstName: 'John',
      lastName: 'john@doe.com',
    };
  }
}
