import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    // injecting the userService in the AuthService class
    @Inject(forwardRef(() => UsersService))
    private readonly userService: UsersService,
  ) {}
  public login(email: string, password: string, id: string) {
    //  check user exist database
    const user = this.userService.findOneById('1234');
    //  login
    //  token
    return 'SAMPLE_TOKEN';
  }

  public isAuth() {
    return true;
  }
}
