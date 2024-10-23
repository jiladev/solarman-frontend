import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100px;
  background-color: #ffffff;
  border-bottom: 1px solid #cfcfcf;
  position: fixed;
  top: 0;

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: #000000;
  }

  span {
    color: #003674;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;
