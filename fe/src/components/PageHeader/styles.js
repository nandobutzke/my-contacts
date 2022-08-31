import styled from 'styled-components';

export const Container = styled.div`
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
    font-size: 24px;
  }
`;
