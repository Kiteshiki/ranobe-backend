import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChapterDto } from './dto/create-chapter.dto';
import { UpdateChapterDto } from './dto/update-chapter.dto';
import { Chapter } from './entities/chapter.entity';

@Injectable()
export class ChapterService {
  constructor(
    @InjectRepository(Chapter)
    private readonly chapterRepository: Repository<Chapter>,
  ) {}

  create(createChapterDto: CreateChapterDto) {
    return this.chapterRepository.save(createChapterDto);
  }

  findAll() {
    return this.chapterRepository.find({ loadRelationIds: true });
  }

  findOne(id: number) {
    return this.chapterRepository.findOne(id);
  }

  update(id: number, updateChapterDto: UpdateChapterDto) {
    return this.chapterRepository.update(id, updateChapterDto);
  }

  remove(id: number) {
    return this.chapterRepository.delete(id);
  }
}
