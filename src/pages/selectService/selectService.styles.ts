import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.main};
  margin: 0;
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.main};
  margin: 0;
`;

export const SelectServiceWrapper = styled.div`
  display: flex;
`;

export const FontAwesomeWrapper = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.secondaryLight};
`;
