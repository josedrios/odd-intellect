import Nav from '@/components/nav.tsx';
import Question from '@/components/question.tsx';
import CommentSection from '@/comments/comment-section';

function App() {
  return (
    <>
      <div id="content-container">
        <Nav />
        <Question />
        <CommentSection />
      </div>
    </>
  );
}

export default App;
