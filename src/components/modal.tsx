import { useModal } from '@/context/modal-context';
import Icon from './icons';
import { ICON } from '@/util/icon-names';

interface ModalProps {
  children: React.ReactNode;
  title?: string;
}

export default function Modal({ children, title }: ModalProps) {
  const { isOpen, close } = useModal();

  if (!isOpen) return null;

  return (
    <div className="modal" onClick={() => close()}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div
          className={`modal__header ${!title ? 'modal__header--titleless' : ''}`}
        >
          {title ? <h3 className="modal__title">{title.toUpperCase()}</h3> : ''}
          <button className="modal__close" onClick={() => close()}>
            <Icon name={ICON.CLOSE} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
