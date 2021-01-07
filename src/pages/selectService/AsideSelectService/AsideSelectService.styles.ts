import styled from 'styled-components';

export const AsideWrapper = styled.aside`
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vh 3vw 3vh 1vw;
`;

export const AsideHeader = styled.div`
  display: flex;
  align-items: center;
  justify-item: center;
  padding-bottom: 8vh;
`;

export const AsideFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-item: center;
`;

export const AsideContent = styled.div`
  margin-bottom: 8vh;
  // border-top: 1px solid #eee;
  // border-bottom: 1px solid #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-item: center;
  text-align: center;
`;

export const DescriptionWrapper = styled.div`
  color: ${({ theme }) => theme.colors.secondaryLight};
`;
