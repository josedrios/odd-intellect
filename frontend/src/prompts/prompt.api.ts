import type { Prompt, PromptApi } from '@/prompts/prompt.types';
import { apiFetch } from '@/util/api-fetch';

function mapPrompt(prompt: PromptApi): Prompt {
  return {
    id: prompt.id,
    text: prompt.text,
    createdAt: new Date(prompt.created_at),
    commentCount: prompt.comment_count,
  };
}

export async function getPrompts(): Promise<Prompt[]> {
  const fetchedPrompts: PromptApi[] = await apiFetch<PromptApi[]>('/prompts', {
    method: 'GET',
  });
  const prompts: Prompt[] = fetchedPrompts.map(mapPrompt);
  console.log('Fetched Prompts:');
  console.log(prompts);
  return prompts;
}

export async function getPrompt(promptId: string): Promise<Prompt> {
  const fetchedPrompt: PromptApi = await apiFetch<PromptApi>(
    `/prompts/${promptId}`,
    {
      method: 'GET',
    },
  );
  const prompt: Prompt = mapPrompt(fetchedPrompt);
  console.log('Fetched Prompt:');
  console.log(prompt);
  return prompt;
}
