import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.mode.cardBackground};
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

    button {
      background: transparent;
      margin-left: 8px;

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
