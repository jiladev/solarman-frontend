import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: relative;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 15vw;
  top: 50%;
  transform: translate(0, -50%);

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #212121;
    margin-bottom: 40px;
  }

  p {
    font-size: 12px;
    color: #757575;
    margin-left: 4px;
    margin-bottom: 40px;
  }
`;

export const CheckboxContainer = styled.label`
  display: inline-block;
  margin-bottom: 20px;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;

  label {
    font-size: 11px;
    color: #616161;
    text-decoration: underline;
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
  border: 2px solid #212121;
  border-radius: 7px;
  transition: 0.3s ease;

  ${HiddenCheckbox}:checked + & {
    background-color: #fff;
    border: 2px solid #212121;
  }

  ${HiddenCheckbox}:checked + &::after {
    content: "";
    position: absolute;
    left: 5px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: 1px solid #212121;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
