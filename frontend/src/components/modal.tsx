import { useModal } from '@/context/modal-context';
import Icon from '@/components/icons';
import { ICON } from '@/util/icon-names';
import { useEffect } from 'react';

type ModalProps = {
  children: React.ReactNode;
  id: string;
  title?: string;
};

export default function Modal({ children, title, id }: ModalProps) {
  const { activeModal, closeModal } = useModal();

  useEffect(() => {
    if (activeModal === id) {
      document.body.style.overflow = 'hidden';
    }

    if (activeModal === '') {
      document.body.style.overflow = 'auto';
    }
  }, [activeModal, id]);

  if (activeModal === id)
    return (
      <div className="modal" onClick={() => closeModal()}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <div
            className={`modal__header ${!title ? 'modal__header--titleless' : ''}`}
          >
            {title ? (
              <h3 className="modal__title">{title.toUpperCase()}</h3>
            ) : (
              ''
            )}
            <button className="modal__close" onClick={() => closeModal()}>
              <Icon name={ICON.CLOSE} />
            </button>
          </div>
          {children}
        </div>
      </div>
    );

  return null;
}
