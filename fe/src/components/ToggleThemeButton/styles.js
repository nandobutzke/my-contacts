import styled from 'styled-components';

export const Container = styled.div`

  label {
    width: 40px;
    height: 20px;
    background: ${({ theme }) => theme.colors.primary.main};
    border-radius: 50px;
    position: relative;
    transform: scale(1.5);

    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }

  input[type="checkbox"] {
    opacity: 0;
    position: absolute;
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
    transform: translateX(20px);
  }
`;
