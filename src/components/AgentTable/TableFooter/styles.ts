import styled from "styled-components";

export const TableFooter = styled.div`
  width: 100%;
  height: 64px;
  background-color: #fff;
  border: 1px solid #eaecf0;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;

  p {
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #344054;
  }

  button {
    width: 132px;
    height: 36px;
    border: 1px solid #d0d5dd;
    border-radius: 18px;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #344054;
    background-color: #fff;
    cursor: pointer;
  }
`;
