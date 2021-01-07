import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 20px 50px rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  max-height: 80vh;
  max-width: 70vw;
  background-color: #fff;
  color: black;
  border-radius: 4px;
`;

export const ModalHeader = styled.div`
  padding: 10px;
`;

export const ModalFooter = styled.div`
  padding: 10px;
`;

export const ModalTitle = styled.div`
  margin: 0;
`;

export const ModalBody = styled.div`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;
