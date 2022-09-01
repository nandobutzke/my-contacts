import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 52px;
  background-color: ${({ theme }) => theme.colors.primary.main};
  border: none;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;

  transition: background 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background-color: #ccc;
    cursor: default;
  }
`;
