import type { Prompt, PromptApi } from '@/components/prompts/prompt.types';
import { apiFetch } from '@/util/apiFetch';

// Put incoming prompts from BE into a prettier type made for the FE
function mapPrompt(prompt: PromptApi): Prompt {
  return {
    id: prompt.id,
    text: prompt.text,
    createdAt: prompt.created_at,
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
