import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RanobeService } from './ranobe.service';
import { CreateRanobeDto } from './dto/create-ranobe.dto';
import { UpdateRanobeDto } from './dto/update-ranobe.dto';
import { Observable } from 'rxjs';
import { Ranobe } from './entities/ranobe.entity';

@Controller('ranobe')
export class RanobeController {
  constructor(private readonly ranobeService: RanobeService) {}

  @Post()
  create(@Body() createRanobeDto: CreateRanobeDto): Observable<Ranobe> {
    return this.ranobeService.create(createRanobeDto);
  }

  @Get()
  findAll() {
    return this.ranobeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ranobeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRanobeDto: UpdateRanobeDto) {
    return this.ranobeService.update(+id, updateRanobeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ranobeService.remove(+id);
  }
}
