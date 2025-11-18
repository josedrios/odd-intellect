import Nav from '@/components/nav.tsx';
import Question from '@/components/question.tsx';
import CommentCard from '@/comments/comment-card';
import Design from '@/app/pages/design.tsx';

function App() {
  return (
    <>
      <div id="content-container">
        <Nav />
        <MainPage />
      </div>
    </>
  );
}

function MainPage() {
  return (
    <>
      <Question />
      <CommentCard username="Some Dude" parent />
    </>
  );
}

export default App;
