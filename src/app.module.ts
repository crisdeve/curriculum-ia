import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurriculumsModule } from './curriculums/curriculums.module';
import { OpenaiModule } from './openai/openai.module';

@Module({
  imports: [CurriculumsModule, OpenaiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
