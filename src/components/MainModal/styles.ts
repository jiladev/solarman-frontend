import { RiErrorWarningLine, RiCheckboxCircleLine } from "react-icons/ri";
import styled from "styled-components";

interface ModalProps {
  message: string;
}

interface VariantProps {
  variant: string;
}

export const Modal = styled.div<ModalProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: ${(props) => (props.message === "" ? "none" : "flex")};
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

export const Container = styled.div<VariantProps>`
  width: 500px;
  height: 320px;
  background-color: #f5f5f9;
  border: 1px solid
    ${(props) =>
      props.variant === "warning"
        ? "#a53221"
        : props.variant === "success"
        ? "#003674"
        : "#000"};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.5));
`;

export const ModalTitle = styled.div<VariantProps>`
  font-size: 32px;
  font-weight: bold;
  color: ${(props) =>
    props.variant === "warning"
      ? "#a53221"
      : props.variant === "success"
      ? "#003674"
      : "#000"};
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ModalMessage = styled.div`
  font-size: 16px;
  color: #757575;
  margin-left: 4px;
  margin-bottom: 20px;
  width: 400px;
  text-align: center;
`;

export const CloseButton = styled.button`
  width: 180px;
  height: 64px;
  background-color: #003674;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  border: 0 solid transparent;
  border-radius: 30px;
  cursor: pointer;
`;

export const WarningIcon = styled(RiErrorWarningLine)`
  width: 64px;
  height: 64px;
  color: #a53221;
`;

export const SuccessIcon = styled(RiCheckboxCircleLine)`
  width: 64px;
  height: 64px;
  color: #003674;
`;
