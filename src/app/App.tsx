import Nav from '@/components/nav.tsx';
import QuestionCard from '@/questions/question-card';
import Question from '@/questions/question';
import CommentSection from '@/comments/comment-section';
import Footer from '@/components/footer';

function App() {
  return (
    <>
      <div id="content-container">
        <Nav />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        {/*       <Question />
        <CommentSection /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
