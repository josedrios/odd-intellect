import Nav from '@/components/nav.tsx';
import ContactPage from '@/app/pages/contact';
import Footer from '@/components/footer';
import HomePage from '@/app/pages/home';
import PostPage from '@/app/pages/post';
import AccountPage from '@/app/pages/account';
import { Routes, Route } from 'react-router-dom';
import DonatePage from '@/app/pages/donate';
import AboutPage from '@/app/pages/about';
import AuthPage from '@/app/pages/auth';
import HelpPage from '@/app/pages/help';
import RequestPage from '@/app/pages/request';
import TermsPage from '@/app/pages/terms';
import backToTop from '@/util/back-to-top';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    backToTop();
  }, [pathname]);

  return (
    <>
      <div id="content-container">
        <Nav />
        {/* PUT BANNER HERE? */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/account" element={<AccountPage isMe />} />
            <Route path="/users/:username" element={<AccountPage />} />
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
