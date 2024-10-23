import styled from "styled-components";

export const Container = styled.div`
  width: 380px;
  height: fit-content;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #212121;
    padding-left: 4px;
    margin-bottom: 24px;
  }

  h6 {
    font-size: 24px;
    font-weight: 400;
    color: #212121;
    padding-left: 4px;
    margin-top: 24px;
    margin-bottom: 48px;
  }
`;

export const Separator = styled.div`
  width: 90px;
  height: 4px;
  margin-left: 8px;
  background-color: #ff8a12;
`;
