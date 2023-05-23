import { Injectable } from '@nestjs/common';
import { CreateCurriculumDto } from '../dto/create-curriculum.dto';
import { UpdateCurriculumDto } from '../dto/update-curriculum.dto';
import { OpenaiService } from 'src/openai/services/openai.service';

@Injectable()
export class CurriculumsService {
  constructor(private openaiService: OpenaiService) {}

  async create(createCurriculumDto: CreateCurriculumDto) {
    return await this.openaiService.create(createCurriculumDto);
  }

  async findAll() {
    return await this.openaiService.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} curriculum`;
  }

  update(id: number, updateCurriculumDto: UpdateCurriculumDto) {
    return `This action updates a #${id} curriculum`;
  }

  remove(id: number) {
    return `This action removes a #${id} curriculum`;
  }
}
