import { PiMagnifyingGlassLight } from "react-icons/pi";
import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  height: 44px;
  position: absolute;
  right: 0px;
  top: -60px;
  align-self: right;

  div {
    position: relative;
  }

  input {
    width: 100%;
    height: 44px;
    border: 1px solid #d0d5dd;
    border-radius: 22px;
    font-size: 16px;
    font-weight: 400;
    color: #212121;
    padding-left: 48px;

    ::placeholder {
      color: #667085;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const MagGlass = styled(PiMagnifyingGlassLight)`
  width: 16px;
  height: 16px;
  color: #667085;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
`;
