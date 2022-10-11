import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const Container = styled.div`
  height: 100vh;
  padding: 16px;
  width: 75%;

  background: ${({ theme }) => theme.colors.background};

  svg {
    color: ${({ theme }) => theme.colors.primary.main};
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;

    padding: 0 24px;

    margin-top: 32px;

    a {
      text-decoration: none;

      display: flex;
      align-items: center;

      margin-top: 24px;

      color: ${({ theme }) => theme.colors.primary.main};

      svg {
        margin-right: 16px;
      }
    }
  }
`;
