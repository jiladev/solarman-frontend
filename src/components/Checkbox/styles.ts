import styled from "styled-components";

interface UnderlinedProps {
  underline: boolean;
}

export const CheckboxContainer = styled.label<UnderlinedProps>`
  display: inline-block;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;

  label {
    font-size: 11px;
    color: #616161;
    text-decoration: ${(props) => (props.underline ? "underlined" : "none")};
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #fff;
  border: 2px solid #a2a2a2;
  border-radius: 7px;
  transition: 0.3s ease;

  ${HiddenCheckbox}:checked + & {
    background-color: #fff;
    border: 2px solid #a2a2a2;
  }

  ${HiddenCheckbox}:checked + &::after {
    content: "";
    position: absolute;
    left: 5px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: 1px solid #a2a2a2;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
