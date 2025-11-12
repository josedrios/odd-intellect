import Nav from '@/components/nav.tsx';
import Question from '@/components/question.tsx';
import ThoughtHeader from '@/thoughts/thoughts-header.tsx';
import ThoughtInput from '@/thoughts/thoughts-input.tsx';
import Thought from '@/thoughts/thought.tsx';

function App() {
  return (
    <>
      <div id="content-container">
        <Nav />
        <Question />
        <ThoughtInput />
        <ThoughtHeader />
        <Thought />
      </div>
    </>
  );
}

export default App;
