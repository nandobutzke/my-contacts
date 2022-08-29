import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 66px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;
  margin-top: 48px;

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
      color: #BCBCBC;
    }
  }
`;
