import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #212121;

  h1 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  p, span {
    font-size: 16px;
    margin-bottom: 12px;
  }

  span {
    color: #757575;
  }
`;