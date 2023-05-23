import { Module } from '@nestjs/common';
import { CurriculumsService } from './services/curriculums.service';
import { CurriculumsController } from './controllers/curriculums.controller';

@Module({
  controllers: [CurriculumsController],
  providers: [CurriculumsService],
})
export class CurriculumsModule {}
