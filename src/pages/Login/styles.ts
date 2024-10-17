import { GoEye, GoEyeClosed } from "react-icons/go";

import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const InputPanel = styled.div`
  width: 572px;
  height: 443px;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  h1 {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 700;
    font-size: 32px;
    color: #212121;
    margin-bottom: 8px;
  }

  h3 {
    font-weight: 400;
    font-size: 12px;
    color: #757575;
    margin-bottom: 40px;
  }
`;

export const InputDiv = styled.div`
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
    border: 1px solid #e0e0e0;
    border-radius: 30px;
    padding: 0 20px;
    padding-top: 20px;
    font-size: 16px;
    letter-spacing: 1.1px;
  }
`;

export const ConfirmButton = styled.button`
  width: 380px;
  height: 64px;
  background-color: #003674;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  border: 0 solid transparent;
  border-radius: 30px;
`;

export const RightsReserved = styled.p`
  font-size: 10px;
  font-weight: 300;
  color: #616161;
  margin-bottom: 8px;
`;

export const EyeIcon = styled(GoEye)`
  width: 16px;
  height: 16px;
  color: #757575;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
`;

export const ClosedEyeIcon = styled(GoEyeClosed)`
  width: 16px;
  height: 16px;
  color: #616161;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
`;
