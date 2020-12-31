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
