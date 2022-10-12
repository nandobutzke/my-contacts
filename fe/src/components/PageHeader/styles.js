import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 24px;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    gap: 8px;

    img {
      transform: rotate(-90deg);
    }
  }

  h1 {
    transition: all 0.2s ease-in;

    color: ${({ theme }) => theme.mode.textColor};

    font-size: 24px;
  }
`;
