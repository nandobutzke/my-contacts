import styled from 'styled-components';

export const Container = styled.div`

  input[type="checkbox"] {
    position: absolute;
  }

  label {
    display: flex;

    width: 35px;
    height: 20px;
    background: ${({ theme }) => theme.colors.primary.main};
    position: relative;
    border-radius: 50px;

    transform: scale(1.25);

    cursor: pointer;
  }

  .toggle-ball {
    width: 15px;
    height: 15px;
    background-color: white;
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    transition: transform 0.2s linear;
  }

  .checkbox:checked + label .toggle-ball {
    transform: translateX(16px);
  }
`;
