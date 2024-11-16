import styled from "styled-components";

interface InputProps {
  validStyle: boolean;
}

export const InputDiv = styled.div<InputProps>`
  position: relative;
  margin-bottom: 20px;

  label {
    position: absolute;
    top: 20px;
    left: 22px;
    font-size: 10px;
    font-weight: 500;
    color: #616161;
  }

  input {
    width: 380px;
    height: 68px;
    border: 1px solid ${(props) => (props.validStyle ? "#e0e0e0" : "#a53221")};
    border-radius: 30px;
    padding: 0 20px;
    padding-top: 20px;
    font-size: 16px;
    letter-spacing: 1.1px;
  }
`;
