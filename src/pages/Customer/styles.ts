import styled from "styled-components";

interface WarningProps {
  showWarning: boolean;
}

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: relative;

  @media (max-width: 900px) {
    padding: 10px 0;
  }
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

  @media (max-width: 900px) {
    position: static;
    scale: 0.8;
    transform: none;
  }
`;

export const CheckboxDiv = styled.div`
  margin-bottom: 20px;
`;

export const Warning = styled.p<WarningProps>`
  font-size: 12px;
  margin-left: 12px;
  transform: translateY(-120%);
  color: #a53221;
  display: ${(props) => (props.showWarning ? "flex" : "none")};
`;
