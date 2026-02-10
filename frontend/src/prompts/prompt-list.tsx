import { useEffect, useState } from 'react';
import Pagination from '@/components/pagination';
import PromptCard from '@/prompts/prompt-card';
import SearchBar from '@/components/search';
import { getPrompts } from '@/prompts/prompt.api';
import type { Prompt } from '@/prompts/prompt.types';

export default function PromptList({ account = false }: { account?: boolean }) {
  const [prompts, setPrompts] = useState<Prompt[] | null>(null);
  useEffect(() => {
    async function loadPrompts() {
      const data: Prompt[] = await getPrompts();
      setPrompts(data);
    }
    loadPrompts();
  }, []);

  if (prompts === null) return <p>loading ...</p>;
  if (prompts.length === 0) return <p>no results :(</p>;

  return (
    <div className="prompt-list">
      <SearchBar />
      {!account &&
        prompts.map((prompt) => <PromptCard key={prompt.id} prompt={prompt} />)}
      {/* {account ? <PromptCard comment /> : <PromptCard />} */}
      {/* {account ? <PromptCard comment /> : <PromptCard />} */}
      {/* {account ? <PromptCard comment /> : <PromptCard />} */}
      <Pagination />
    </div>
  );
}
