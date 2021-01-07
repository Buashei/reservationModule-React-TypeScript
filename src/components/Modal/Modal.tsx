import React, { useEffect } from 'react';
import { ModalWrapper, ModalContent } from './Modal.style';
import { ToShowModalProps } from './Modal.types';
import { SelectService } from '../../pages/selectService/selectService';

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
        <SelectService onClose={props.onClose} />
      </ModalContent>
    </ModalWrapper>
  );
};
