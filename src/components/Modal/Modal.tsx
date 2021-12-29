import { useEffect, useState, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import { ModalProps } from './Modal.props';
import styles from './Modal.module.scss';

export const Modal = ({ show, onClose, children }: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    onClose();
  };

  const modalContent: JSX.Element | null = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <a href="#" onClick={handleClose}>
            <FaTimes />
          </a>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  ) : null;

  if (isBrowser && modalContent) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root') as HTMLElement
    );
  } else {
    return null;
  }
};
