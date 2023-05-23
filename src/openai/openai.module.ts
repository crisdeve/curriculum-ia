import { Module, Global } from '@nestjs/common';
import { OpenaiService } from './services/openai.service';

@Global()
@Module({
  providers: [OpenaiService],
  exports: [OpenaiService],
})
export class OpenaiModule {}
