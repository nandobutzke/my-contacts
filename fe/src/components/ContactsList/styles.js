import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 39px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.main};
    text-decoration: none;
    font-weight: bold;

    border: 2px solid ${({ theme }) => theme.colors.main};
    border-radius: 4px;

    padding: 8px 16px;

    transition: all 0.2s ease-in;

    &:hover {
      background-color: #5061FC;
      color: ${({ theme }) => theme.colors.background};
    }
  }
`;
