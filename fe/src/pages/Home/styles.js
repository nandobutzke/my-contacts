import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 39px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    background: #fff;

    width: 100%;
    height: 50px;
    padding: 0 16px;

    border: none;
    border-radius: 25px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

    outline: 0;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  padding-bottom: 16px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[100]};

  margin-top: 32px;

  strong {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;

    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;

    padding: 8px 16px;

    transition: all 0.2s ease-in;

    &:hover {
      background-color: #5061FC;
      color: ${({ theme }) => theme.colors.background};
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    margin-bottom: 16px;

    button {
      background: none;
      border: none;

      display: flex;
      align-items: center;

      font-size: 16px;
      font-weight: bold;

      gap: 8px;

      span {
        color: ${({ theme }) => theme.colors.primary.main};
      }

      img {
        transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
        transition: transform 0.2s ease-in;
      }
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      gap: 8px;

      small {
        color: ${({ theme }) => theme.colors.primary.main};
        background: ${({ theme }) => theme.colors.primary.lighter};

        text-transform: uppercase;
        font-weight: bold;

        padding: 4px;
      }
    }

    span {
      display: block;

      font-size: 14px;
      color: #aaa
    }
  }

  .actions {
    display: flex;
    align-items: center;

    gap: 8px;

    button {
      background: transparent;

      border: none;
    }
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 24px;

  padding: 16px;

  div {
    span {
      font: bold 22px 'Sora', sans-serif;
      color: ${({ theme }) => theme.colors.danger.dark};
      display: block;
      padding-bottom: 8px;
    }
  }
`;

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 16px;

  p {
    margin-top: 8px;
    text-align: center;
    color: ${({ theme }) => theme.colors.gray[200]};

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

`;

export const SearchNotFoundContainer = styled.div`
  display: flex;
  align-items: flex-start;

  margin-top: 16px;

  gap: 24px;

  span {
    color: ${({ theme }) => theme.colors.gray[200]};
    word-break: break-word;
  }
`;
