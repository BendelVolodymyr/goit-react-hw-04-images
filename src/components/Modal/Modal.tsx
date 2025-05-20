import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from 'type/Modal';
import style from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root') as HTMLElement;

const Modal: React.FC<ModalProps> = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={style.modal__backdrop} onClick={handleBackdropClick}>
      <div className={style.modal__box}>
        <img className={style.modal__image} src={src} alt={alt} />
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
