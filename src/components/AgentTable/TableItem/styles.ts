import styled from "styled-components";

export const TableRow = styled.div`
  width: 100%;
  height: 72px;
  background-color: #fff;
  border: 1px solid #eaecf0;
  border-bottom: none;
  display: flex;
  align-items: center;
  padding-left: 16px;
  position: relative;

  p {
    font-size: 16px;
    font-weight: 400;
    color: #101828;

    span {
      color: #667085;
    }
  }

  button {
    width: 80px;
    height: 36px;
    background-color: #004061;
    border: 1px solid #d0d5dd;
    border-radius: 18px;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

export const TableCell = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  &.client {
    width: 276px;
  }

  &.reports {
    width: 200px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
