import styled from 'styled-components';

export const BoxWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.boxWrapperBorder};
  border-radius: 4px;
  padding: 1.5vh 1vw;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CustomIconWrapper = styled.div`
::after {
  content: '';
  margin-right: 0vw;
  transition: all 0.5s;
}
&:hover {
  ::after {
    margin-right: 0.5vw;
}`;

export const ServiceTileContainer = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 0 1vw;
`;
