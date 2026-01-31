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
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  useEffect(() => {
    async function loadPrompts() {
      const data = await getPrompts();
      setPrompts(data);
    }
    loadPrompts();
  }, []);

  return (
    <div className="prompt-list">
      <SearchBar />
      {!account &&
        prompts.map((prompt) => (
          <PromptCard
            key={prompt.prompt_id}
            prompt={prompt.text}
            createdAt={prompt.start_date}
          />
        ))}
      {/* {account ? <PromptCard comment /> : <PromptCard />} */}
      {/* {account ? <PromptCard comment /> : <PromptCard />} */}
      {/* {account ? <PromptCard comment /> : <PromptCard />} */}
      {/* {account ? <PromptCard comment /> : <PromptCard />} */}
      {/* {account ? <PromptCard comment /> : <PromptCard />} */}
      {/* {account ? <PromptCard comment /> : <PromptCard />} */}
      {/* {account ? <PromptCard comment /> : <PromptCard />} */}
      <Pagination />
    </div>
  );
}
