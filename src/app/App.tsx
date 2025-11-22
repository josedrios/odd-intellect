import Nav from '@/components/nav.tsx';
import Footer from '@/components/footer';
import HomePage from './pages/home';
import QuestionPage from './pages/question';
import AccountPage from './pages/account';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div id="content-container">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/question" element={<QuestionPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
