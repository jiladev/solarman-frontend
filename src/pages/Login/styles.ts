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

export const EyeIcon = styled(GoEye)`
  width: 16px;
  height: 16px;
  color: #757575;
  position: absolute;
  right: 20px;
  top: 26px;
  cursor: pointer;
`;

export const ClosedEyeIcon = styled(GoEyeClosed)`
  width: 16px;
  height: 16px;
  color: #616161;
  position: absolute;
  right: 20px;
  top: 26px;
  cursor: pointer;
`;

export const PasswordInputDiv = styled.div`
  position: relative;
`;
