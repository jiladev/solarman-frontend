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
`;

export const CheckboxDiv = styled.div`
  margin-bottom: 20px;
`;
