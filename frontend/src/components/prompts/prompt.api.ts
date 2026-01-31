import type { Prompt } from '@/components/prompts/prompt.types';
import { apiFetch } from '@/util/apiFetch';

export async function getPrompts(): Promise<Prompt[]> {
  const fetchedPrompts = await apiFetch<Prompt[]>('/prompts', {
    method: 'GET',
  });
  console.log('Fetched Prompts From API:');
  console.log(fetchedPrompts);
  return fetchedPrompts;
}
