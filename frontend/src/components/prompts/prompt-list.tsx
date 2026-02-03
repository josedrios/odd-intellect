import Pagination from '@/components/pagination';
import PromptCard from '@/components/prompts/prompt-card';
import SearchBar from '@/components/search';
import { useEffect, useState } from 'react';
import { getPrompts } from './prompt.api';
import type { Prompt } from './prompt.types';

interface PromptListProps {
  account?: boolean;
}

export default function PromptList({ account = false }: PromptListProps) {
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
