import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 56px;

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #212121;
    margin-bottom: 16px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Warning = styled.p`
  font-size: 16px;
  font-weight: 700;
  color: #ff8f8f;
  margin-bottom: 20px;
`;