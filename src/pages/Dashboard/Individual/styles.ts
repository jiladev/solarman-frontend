import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #050505;
    margin-top: 24px;
  }
`;

export const Content = styled.div`
  width: 1000px;
  margin: 0 auto;

  div {
    width: 100%;
  }
`;

export const BackButton = styled.button`
  width: 68px;
  height: 36px;
  background-color: #ffffff;
  border: 1px solid #d0d5dd;
  border-radius: 18px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #344054;
  margin-top: 12px;
`;
