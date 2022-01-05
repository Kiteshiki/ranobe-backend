import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RanobeModule } from './ranobe/ranobe.module';
import { ChapterModule } from './chapter/chapter.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    RanobeModule,
    ChapterModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule {}
