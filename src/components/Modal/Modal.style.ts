import styled from 'styled-components';
import { mediaQueriesMin, mediaQueriesMax } from '../../utils/mediaQueries';

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
  background-color: #fff;
  color: black;
  border-radius: 4px;
  ${mediaQueriesMax('md')`
    width: 100%;
    height: 100%;
    border-radius: 0;
  `}
  ${mediaQueriesMin('md')`
    max-width: 70vw;
    max-height: 70vh;
  `}
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
