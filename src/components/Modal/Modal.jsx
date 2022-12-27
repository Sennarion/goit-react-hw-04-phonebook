import PropTypes from 'prop-types';
import { Backdrop, ModalWindow } from './Modal.styled';
import { useEffect } from 'react';

function Modal({ children, toggleModal }) {
  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      toggleModal(null);
    }
  };

  useEffect(() => {
    const onPressEsc = e => {
      if (e.code === 'Escape') {
        toggleModal(null);
      }
    };

    window.addEventListener('keydown', onPressEsc);

    return () => {
      window.removeEventListener('keydown', onPressEsc);
    };
  }, [toggleModal]);

  return (
    <Backdrop onClick={onBackdropClick}>
      <ModalWindow>{children}</ModalWindow>
    </Backdrop>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
