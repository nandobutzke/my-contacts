import styled from 'styled-components';

export const Container = styled.div`
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
