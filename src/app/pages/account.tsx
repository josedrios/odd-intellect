import AccountHeader from '@/components/account/account-header';
import AccountStatList from '@/components/account/account-stats';
import Pagination from '@/components/pagination';
import SearchBar from '@/components/search';
import QuestionCard from '@/questions/question-card';

export default function AccountPage() {
  return (
    <>
      <AccountHeader />
      <AccountStatList />
      <SearchBar account />
      <QuestionCard comment />
      <QuestionCard comment />
      <QuestionCard comment />
      <QuestionCard comment />
      <QuestionCard comment />
      <QuestionCard comment />
      <QuestionCard comment />
      <Pagination />
    </>
  );
}
