import styled from 'styled-components';

export const ContentWrapper = styled.div`
  width: 30vw;
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 70vh;
  overflow: overlay;
`;

export const ContentHeader = styled.div`
  padding: 1vh 2vw 1vh 1vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ContentContent = styled.div`
  padding: 2.5vh 4vh;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-top: 0;
  border-bottom: 0;
  height: 100%;
  margin: auto 0;
  overflow: overlay;
  display: flex;
  flex-direction: column;
  gap: 2vh;
`;

export const ContentFooterWrapper = styled.div`
  padding: 1vh 1vw;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
`;

export const ContentFooterButton = styled.button`
  margin: 0 0 0 auto;
  display: flex;
  flex-direction: row;
  width: 8vw;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.main};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.main};
  padding: 1vh;
  &:hover {
    cursor: pointer;
  }
  ::before {
    content: 'Next Step';
    display: flex;
  }
  ::after {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f061';
    color: 'white';
    margin-left: 0.5vw;
    transition: all 0.5s;
  }
  &:hover {
    ::after {
      margin-left: 1vw;
    }
  }
`;

export const ContentFooterButtonContent = styled.div`
  maring-right: 0.5vw;
  display: flex;
`;

export const ContentFooterButtonIcon = styled.div`
  ::after {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f061';
    color: 'white';
    margin-left: 0.2vw;
  }
  &:hover {
    ::after {
      margin-left: 0.5vw;
    }
  }
`;
