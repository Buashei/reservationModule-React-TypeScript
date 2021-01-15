import styled from 'styled-components';
import { mediaQueriesMax } from '../../../utils/mediaQueries';

export const ServiceTileContainer = styled.h3`
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
  &:hover ${ServiceTileContainer} {
    margin-left: 1.5vw;
  }
`;

export const ServiceAmounContainer = styled.h5`
  color: ${({ theme }) => theme.colors.secondaryLight};
  margin-bottom: 0;
  display: flex;
  ::after {
    font-family: 'Font Awesome 5 Free';
    font-weight: 400;
    content: '\f0fe';
    color: ${({ theme }) => theme.colors.mainLight};
    margin-left: 0.5vw;
    padding-left: 0.5vw;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }
  position: absolute;
  right: 1vw;
`;
