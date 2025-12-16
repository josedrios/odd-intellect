import { useModal } from '@/context/modal-context';
import Icon from './icons';
import { ICON } from '@/util/icon-names';

export default function Modal({ children }: { children: React.ReactNode }) {
  const { isOpen, close } = useModal();

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={() => close()}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={() => close()}>
          <Icon name={ICON.CLOSE} />
        </button>
        {children}
      </div>
    </div>
  );
}
