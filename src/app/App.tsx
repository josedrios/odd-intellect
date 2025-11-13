import Nav from '@/components/nav.tsx';
import Question from '@/components/question.tsx';
import Design from '@/app/pages/design.tsx';

function App() {
  return (
    <>
      <div id="content-container">
        <Nav />
        <Design />
        <MainPage />
      </div>
    </>
  );
}

function MainPage() {
  return (
    <>
      <Question />
    </>
  );
}

export default App;
