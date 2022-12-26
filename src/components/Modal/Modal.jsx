import PropTypes from 'prop-types';
import { Backdrop, ModalWindow } from './Modal.styled';
import { useEffect } from 'react';

function Modal({ children, setIsModalOpen }) {
  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    const onPressEsc = e => {
      if (e.code === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', onPressEsc);

    return () => {
      window.removeEventListener('keydown', onPressEsc);
    };
  }, [setIsModalOpen]);

  return (
    <Backdrop onClick={onBackdropClick}>
      <ModalWindow>{children}</ModalWindow>
    </Backdrop>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
};

export default Modal;
