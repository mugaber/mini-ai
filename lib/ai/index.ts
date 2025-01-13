import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export function customModel(model: string) {
  return {
    provider: openai,
    model: model,
  };
}