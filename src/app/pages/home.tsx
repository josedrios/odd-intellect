import Pagination from '@/components/pagination';
import SearchBar from '@/components/search';
import QuestionCard from '@/questions/question-card';

export default function HomePage() {
  return (
    <>
      <SearchBar />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <QuestionCard />
      <Pagination />
    </>
  );
}
