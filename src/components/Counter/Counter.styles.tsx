import styled from '@emotion/styled';

export const Counter = styled.span`
  display: flex;
  width: 90px;
  height: 33px;
  border: 1px solid black;
  border-radius: 4px;
`;

export const MinusBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 33px;
  border-right: 1px solid black;
  border-radius: 4px 0 0 4px;
  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 3px;
    width: 11px;
    height: 20px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 33px;
  input {
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    border-width: 0;
    &:focus {
      outline: none;
    }
    padding: 0;
    text-align: center;
    width: 30px;
  }
`;

export const PlusBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 33px;
  border-left: 1px solid black;
  cursor: pointer;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 3px;
    width: 11px;
    height: 20px;
  }
`;
