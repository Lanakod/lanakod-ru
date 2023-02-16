import { USER_SERVICE } from '@config/constants';
import { UserService } from '@domain/app/user/interface/service.interface';
import { Controller, Get, Inject, Param } from '@nestjs/common';

const UserService = () => Inject(USER_SERVICE);

@Controller('users')
export class UserController {
  constructor(@UserService() private readonly userService: UserService) {}

  @Get()
  async users() {
    let status = false;
    const users = await this.userService.all();
    if (users.length > 0) status = true;

    return { status, users };
  }

  @Get(':id')
  async user(@Param('id') id: number) {
    let status = false;
    const user = await this.userService.getById(id);
    if (user) status = true;

    return { status, user };
  }
}
