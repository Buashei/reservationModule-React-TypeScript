import styled from 'styled-components';
import { mediaQueriesMax } from '../../../utils/mediaQueries';

export const ProcedureTileContainer = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 0 1vw;
  transition: all 0.5s;
  ${mediaQueriesMax('md')`
    font-size: 3vw;
    width: 40vw;
  `}
  ${mediaQueriesMax('sm')`
    font-size: 3.5vw;
  `}
`;

export const BoxWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.boxWrapperBorder};
  border-radius: 4px;
  padding: 1.5vh 1vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.main};
    cursor: pointer;
  }
  &:hover ${ProcedureTileContainer} {
    margin-left: 1.5vw;
  }
`;

export const ProcedurePriceContainer = styled.h5`
  color: ${({ theme }) => theme.colors.secondaryLight};
  margin-bottom: 0;
  display: flex;
  ::before {
    content: '';
    color: ${({ theme }) => theme.colors.mainLight};
    padding-left: 1vw;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }
  position: absolute;
  right: 1vw;
`;
export const ProcedurePriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const ProcedurePrice = styled.div`
  color: ${({ theme }) => theme.colors.main};
  font-weight: 800;
  font-size: 2vh;
`;

export const ProcedureDescription = styled.p`
  color: #8e97b3;
  font-size: 12px;
  margin-top: 3px;
`;
