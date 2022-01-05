import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { generateHash } from '../helpers';
import { User } from '../user/entitites/user.entity';
import { UserService } from '../user/user.service';
import { LoginPayload, RegisterPayload } from './interfaces';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<Omit<User, 'hashedPassword'>> {
    const user = await this.userService.findOne(username);
    const isPasswordMatch = await bcrypt.compare(password, user.hashedPassword);

    if (user && isPasswordMatch) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { hashedPassword, ...result } = user;
      return result;
    }
    return null;
  }

  login(payload: LoginPayload) {
    return {
      access_token: this.jwtService.sign({
        username: payload.username,
        sub: payload.id,
      }),
    };
  }

  async register(payload: RegisterPayload) {
    return this.userService.create({
      username: payload.username,
      hashedPassword: await generateHash(payload.password),
    });
  }
}
