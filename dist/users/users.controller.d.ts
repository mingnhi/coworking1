import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(UserDto: UserDto): Promise<import("./schemas/users.schema").User>;
}
