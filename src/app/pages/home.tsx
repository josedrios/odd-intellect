import Pagination from '@/components/pagination';
import SearchBar from '@/components/search';
import PromptCard from '@/prompts/prompt-card';

export default function HomePage() {
  return (
    <>
      <SearchBar />
      <PromptCard />
      <PromptCard />
      <PromptCard />
      <PromptCard />
      <PromptCard />
      <PromptCard />
      <PromptCard />
      <PromptCard />
      <Pagination />
    </>
  );
}
