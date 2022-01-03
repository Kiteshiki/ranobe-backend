import { Module } from '@nestjs/common';
import { RanobeService } from './ranobe.service';
import { RanobeController } from './ranobe.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ranobe } from './entities/ranobe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ranobe])],
  controllers: [RanobeController],
  providers: [RanobeService],
})
export class RanobeModule {}
