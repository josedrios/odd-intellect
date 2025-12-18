import { useState, useContext, createContext, useEffect } from 'react';

interface ModalCtxType {
  activeModal: string;
  openModal: (id: string) => void;
  closeModal: () => void;
}

const ModalCtx = createContext<ModalCtxType | null>(null);
export const useModal = () => useContext(ModalCtx)!;

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeModal, setActiveModal] = useState<string>('');
  const openModal = (id: string) => setActiveModal(id);
  const closeModal = () => setActiveModal('');

  useEffect(() => {
    document.body.style.overflow = activeModal === '' ? 'auto' : 'hidden';
  }, [activeModal]);

  return (
    <ModalCtx.Provider value={{ activeModal, openModal, closeModal }}>
      {children}
    </ModalCtx.Provider>
  );
}
