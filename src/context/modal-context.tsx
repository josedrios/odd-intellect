import { useState, useContext, createContext, useEffect } from 'react';

interface ModalCtxType {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

const ModalCtx = createContext<ModalCtxType | null>(null);
export const useModal = () => useContext(ModalCtx)!;

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen((curr) => !curr);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <ModalCtx.Provider value={{ isOpen, toggle, open, close }}>
      {children}
    </ModalCtx.Provider>
  );
}
