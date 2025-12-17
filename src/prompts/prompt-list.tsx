import Pagination from '@/components/pagination';
import PromptCard from './prompt-card';
import SearchBar from '@/components/search';

interface PromptListProps {
  account?: boolean;
}

export default function PromptList({ account = false }: PromptListProps) {
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
