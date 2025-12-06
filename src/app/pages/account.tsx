import TextPanel from '@/components/text-panel';
import AccountStatList from '@/components/account/account-stats';
import Pagination from '@/components/pagination';
import SearchBar from '@/components/search';
import QuestionCard from '@/questions/question-card';
import { useState } from 'react';

export default function AccountPage() {
  const [viewComments, setViewComments] = useState(false);

  return (
    <>
      <TextPanel text="somedude" />
      <AccountStatList />
      {viewComments ? (
        <>
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
      ) : (
        <button
          className="account-view-comments"
          onClick={(e) => {
            e.preventDefault();
            setViewComments(true);
          }}
        >
          PEEK INSIDE THEIR MIND
        </button>
      )}
    </>
  );
}
