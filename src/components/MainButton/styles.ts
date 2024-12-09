import styled from "styled-components";

export const ConfirmButton = styled.button`
  width: 380px;
  height: 64px;
  background-color: #003674;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0 solid transparent;
  border-radius: 30px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: #c5c5c5;
  }
`;
