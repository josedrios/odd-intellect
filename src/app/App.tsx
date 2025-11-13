import Nav from '@/components/nav.tsx';
import Question from '@/components/question.tsx';
import ThoughtHeader from '@/thoughts/thoughts-header.tsx';
import Thought from '@/thoughts/thought.tsx';
import Design from '@/app/pages/design.tsx';

function App() {
  return (
    <>
      <div id="content-container">
        <Nav />
        <MainPage />
        <Design />
      </div>
    </>
  );
}

function MainPage() {
  return (
    <>
      <Question />
      <ThoughtHeader />
      <div className="thoughts-section">
        <Thought />
        <Thought />
        <Thought />
        <Thought />
        <Thought />
        <Thought />
      </div>
    </>
  );
}

export default App;
