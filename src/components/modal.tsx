import { useModal } from '@/context/modal-context';

export default function Modal({ children }: { children: React.ReactNode }) {
  const { isOpen, close } = useModal();

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={() => close()}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
