import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  //height: 200px;

  max-width: 450px;
  padding: 24px;

  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;

  strong {
    font-size: 22px;
    color: ${({ theme, danger }) => danger && theme.colors.danger.main};
  }

  small {
    margin-top: 8px;
    font-size: 16px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: end;

  gap: 8px;

  .cancel-button {
    background: none;
    border: none;

    font-size: 16px;

    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

/* export const WarningContainer = styled.div`
  display: flex;
  flex-direction: column;

`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;

  gap: 8px;

  .delete {
    padding: 10px 16px;
    background-color: ${({ theme }) => theme.colors.danger};
    color: #fff;
    border: 2px solid #fff;
    border-radius: 4px;

  }
`; */
