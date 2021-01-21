import styled from 'styled-components';
import { mediaQueriesMax } from '../../utils/mediaQueries';

export const AsideWrapper = styled.aside`
  width: 35vw;
  display: flex;
  flex-direction: column;
  ${mediaQueriesMax('md')`
  display: none;
  `};
  ${mediaQueriesMax('sm')`
  display: none;
  `};
`;

export const AsideHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1vh 2vw 1vh 1vw;
  height: 10vh;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  text-transform: uppercase;
  font-weight: 800;
`;

export const H2 = styled.div`
  color: ${({ theme }) => theme.colors.main};
  margin: 0 0 0 auto;
`;

export const AsideContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 1.5vw 3vh 1vw;
`;

export const Stripe = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  width: 50%;
  margin-top: 0.75vh;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.secondaryLight};
  text-transform: uppercase;
  font-size: 1.5vh;
  font-weight: 600;
  margin-bottom: 0;
  display: block;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-weight: 800;
  margin-bottom: 0.75vh;
`;
