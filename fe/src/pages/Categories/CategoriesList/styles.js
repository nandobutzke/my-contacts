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
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.mode.cardBackground};
  color: ${({ theme }) => theme.mode.textColor};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 16px;

  transition: all 0.2s ease-in;

  .info {
    display: flex;
    flex-direction: column;
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

  & + & {
    margin-top: 16px;
  }

  span {
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
