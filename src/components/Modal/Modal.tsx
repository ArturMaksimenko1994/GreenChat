import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.scss';

const modalRoot = document.getElementById('root-modal') as HTMLElement;

type IModalProps = {
  title?: string | '';
  children: ReactNode;
  active: boolean;
  setActive: (active: boolean) => void;
};

const Modal = ({ title, children, active, setActive }: IModalProps) => {
  // Закрыть модалку при нажатии на Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActive(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setActive]);

  if (!active) return null;

  return createPortal(
    (
      <div className={styles.modal} onClick={() => setActive(false)}>
        <div className={styles.modal__block} onClick={(e) => e.stopPropagation()}>
          <svg className={styles.modal__close} onClick={() => setActive(false)} width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 7V11M11 15H11.01M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="#D92D20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p className={styles.modal__title}>{title}</p>
          <div className={styles.modal__content}>
            {children}
          </div>
        </div>
        <div className={styles.modal__overlay} onClick={() => setActive(false)}></div>
      </div>
    ),
    modalRoot
  );
};

export default Modal;
