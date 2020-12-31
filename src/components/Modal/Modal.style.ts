import styled from 'styled-components';

export const Button = styled.button`
  width: 200px;
  height: 50px;
  border: 1px solid black;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.main};
  box-shadow: 1.5px 2px rgba(255, 255, 255, 0.1);
  font-family: Ubuntu;
  font-weight: ${({ theme }) => theme.font.bold};
  text-transform: uppercase;
`;

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
`;

export const ModalContent = styled.div`
  width: 70vw;
  background-color: #fff;
  color: black;
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
