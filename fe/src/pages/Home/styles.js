import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 39px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    background: ${({ theme }) => theme.mode.inputColor};
    color: ${({ theme }) => theme.mode.textColor};

    width: 100%;
    height: 50px;
    padding: 0 16px;

    border: none;
    border-radius: 25px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

    outline: 0;

    transition: all 0.2s ease-in;

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

  border-bottom: 2px solid ${({ theme }) => theme.mode.headerBorderBottomColor};

  margin-top: 32px;

  transition: all 0.2s ease-in;

  strong {
    color: ${({ theme }) => theme.mode.textColor};

    font-size: 24px;

    transition: color 0.2s ease-in;
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
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;

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
  background: ${({ theme }) => theme.mode.contactCardBackground};
  color: ${({ theme }) => theme.mode.textColor};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;

  transition: all 0.2s ease-in;

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
        transition: all 0.2s ease-in;

        color: ${({ theme }) => theme.mode.categorySmallColor};
        background: ${({ theme }) => theme.mode.categorySmallBackground};

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
