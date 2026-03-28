import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/app/App.tsx';
import '@/styles/main.css';
import { BrowserRouter } from 'react-router-dom';
import ModalProvider from '@/context/modal-context';
import AuthProvider from '@/context/auth-context';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
