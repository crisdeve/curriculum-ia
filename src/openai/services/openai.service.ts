import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi } from 'openai';

@Injectable()
export class OpenaiService {
  private configOAI = new Configuration({
    organization: process.env.OPENAI_ORG_ID,
    apiKey: process.env.OPENAI_API_KEY,
  });

  private openai = new OpenAIApi(this.configOAI);

  async findAll() {
    const models = await this.openai.listModels();
    return models.data;
  }

  async create(prompt) {
    try {
      const completion = await this.openai.createCompletion({
        model: 'gpt-3.5-turbo',
        prompt: generatePrompt(prompt.experience),
        temperature: 0.6,
      });

      return completion.data;
    } catch (error) {
      return error;
    }
  }
}

function generatePrompt(experience) {
  const capitalizedexperience =
    experience[0].toUpperCase() + experience.slice(1).toLowerCase();
  return `Create a curriculum of software developer with work experience in:
    ${capitalizedexperience}
  `;
}
