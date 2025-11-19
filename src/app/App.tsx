import Nav from '@/components/nav.tsx';
import Question from '@/components/question.tsx';
import CommentSection from '@/comments/comment-section';
import Footer from '@/components/footer';

function App() {
  return (
    <>
      <div id="content-container">
        <Nav />
        <Question />
        <CommentSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
