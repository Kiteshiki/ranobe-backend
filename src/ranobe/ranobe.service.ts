import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateRanobeDto } from './dto/create-ranobe.dto';
import { UpdateRanobeDto } from './dto/update-ranobe.dto';
import { Ranobe } from './entities/ranobe.entity';

@Injectable()
export class RanobeService {
  constructor(
    @InjectRepository(Ranobe)
    private readonly ranobeRepository: Repository<Ranobe>,
  ) {}

  create(createRanobeDto: CreateRanobeDto): Observable<Ranobe> {
    return from(this.ranobeRepository.save(createRanobeDto));
  }

  findAll() {
    return this.ranobeRepository.find({ loadRelationIds: true });
  }

  findOne(id: number) {
    return this.ranobeRepository.findOne(id);
  }

  update(id: number, updateRanobeDto: UpdateRanobeDto) {
    return this.ranobeRepository.update(id, updateRanobeDto);
  }

  remove(id: number) {
    return this.ranobeRepository.delete(id);
  }
}
