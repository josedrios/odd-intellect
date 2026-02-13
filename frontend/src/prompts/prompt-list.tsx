import { useEffect, useState } from 'react';
import Pagination from '@/components/pagination';
import PromptCard from '@/prompts/prompt-card';
import SearchBar from '@/components/search';
import { getPrompts } from '@/prompts/prompt.api';
import type { Prompt } from '@/prompts/prompt.types';
import Loader from '@/components/loader';

export default function PromptList({ account = false }: { account?: boolean }) {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function loadPrompts() {
      try {
        setLoading(true);
        setError(null);

        const data: Prompt[] = await getPrompts();
        setPrompts(data);
      } catch (error) {
        console.log(error);
        setError('Failed to load prompt list');
      } finally {
        setLoading(false);
      }
    }
    loadPrompts();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div className="prompt-list">
      <SearchBar />
      {!account &&
        prompts.map((prompt) => <PromptCard key={prompt.id} prompt={prompt} />)}
      {/* These are below are used to show comments on specifc prompts when vieing a profile */}
      {/* {account ? <PromptCard comment /> : <PromptCard />} */}
      {/* {account ? <PromptCard comment /> : <PromptCard />} */}
      {/* {account ? <PromptCard comment /> : <PromptCard />} */}
      <Pagination />
    </div>
  );
}
