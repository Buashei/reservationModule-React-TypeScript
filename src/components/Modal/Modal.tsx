import React, { useEffect } from 'react';
import { ModalWrapper, ModalContent, ModalHeader, ModalBody, ModalFooter } from './Modal.style';
import { ToShowModalProps } from './Modal.types';

export const Modal: React.FC<ToShowModalProps> = props => {
  if (!props.show) {
    return null;
  }
  const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);
  return (
    <ModalWrapper onClick={props.onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <h4 className='modal-title'>Modal Title</h4>
        </ModalHeader>
        <ModalBody>This is modal content</ModalBody>
        <ModalFooter>
          <button onClick={props.onClose} className='button'>
            Close
          </button>
        </ModalFooter>
      </ModalContent>
    </ModalWrapper>
  );
};
