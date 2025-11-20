import Nav from '@/components/nav.tsx';
import QuestionCard from '@/questions/question-card';
import QuestionPagination from '@/questions/question-pagination';
import QuestionPanel from '@/questions/question-panel';
import CommentSection from '@/comments/comment-section';
import Footer from '@/components/footer';
import AccountHeader from '@/components/account/account-header';
import AccountStatList from '@/components/account/account-stats';
import SearchBar from '@/components/search';

function App() {
  return (
    <>
      <div id="content-container">
        <Nav />
        <main>
          <AccountPage />
        </main>
        <Footer />
      </div>
    </>
  );
}

function HomePage() {
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
      <QuestionPagination />
    </>
  );
}

function QuestionPage() {
  return (
    <>
      <QuestionPanel />
      <CommentSection />
    </>
  );
}

function AccountPage() {
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
    </>
  );
}

export default App;
