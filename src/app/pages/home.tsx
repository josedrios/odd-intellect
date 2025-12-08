import Pagination from '@/components/pagination';
import SearchBar from '@/components/search';
import QuestionCard from '@/questions/question-card';
import Modal from '@/components/modal';
import { useModal } from '@/context/modal-context';

export default function HomePage() {
  return (
    <>
      <Modal>
        <p>This is my modal</p>
      </Modal>
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
