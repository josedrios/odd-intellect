import Pagination from '@/components/pagination';
import PromptCard from '@/components/prompts/prompt-card';
import SearchBar from '@/components/search';
import { apiFetch } from '@/util/apiFetch';
import { useEffect } from 'react';

interface PromptListProps {
  account?: boolean;
}

export default function PromptList({ account = false }: PromptListProps) {
  useEffect(() => {
    const loadPrompts = async () => {
      const prompts = await apiFetch<any>('/prompts');
      console.log(prompts);
    };

    loadPrompts();
  }, []);

  return (
    <div className="prompt-list">
      <SearchBar />
      {account ? <PromptCard comment /> : <PromptCard />}
      {account ? <PromptCard comment /> : <PromptCard />}
      {account ? <PromptCard comment /> : <PromptCard />}
      {account ? <PromptCard comment /> : <PromptCard />}
      {account ? <PromptCard comment /> : <PromptCard />}
      {account ? <PromptCard comment /> : <PromptCard />}
      {account ? <PromptCard comment /> : <PromptCard />}
      <Pagination />
    </div>
  );
}
