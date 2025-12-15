import Nav from '@/components/nav.tsx';
import ContactPage from './pages/contact';
import Footer from '@/components/footer';
import HomePage from './pages/home';
import QuestionPage from './pages/question';
import AccountPage from './pages/account';
import { Routes, Route } from 'react-router-dom';
import DonatePage from './pages/donate';
import AboutPage from './pages/about';
import AuthPage from './pages/auth';
import HelpPage from './pages/help';
import RequestPage from './pages/request';
import TermsPage from './pages/terms';

function App() {
  return (
    <>
      <div id="content-container">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/question" element={<QuestionPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/request" element={<RequestPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
