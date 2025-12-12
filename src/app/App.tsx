import Nav from '@/components/nav.tsx';
import ContactPage from './pages/contact';
import Footer from '@/components/footer';
import HomePage from './pages/home';
import QuestionPage from './pages/question';
import AccountPage from './pages/account';
import { Routes, Route } from 'react-router-dom';
import DonatePage from './pages/donate';
import AboutPage from './pages/about';
import AuthenticationPage from './pages/authentication';

function App() {
  return (
    <>
      <div id="content-container">
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/question" element={<QuestionPage />} />
            <Route path="/authentication" element={<AuthenticationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/donate" element={<DonatePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
