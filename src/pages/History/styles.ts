import { FaArrowDown, FaRegTrashAlt } from "react-icons/fa";
import { BsPrinter } from "react-icons/bs";

import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const HistoryTable = styled.div`
  width: 1000px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  position: relative;

  h2 {
    font-size: 12px;
    font-weight: 400;
    color: #8a92a6;
    margin-right: 16px;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    color: #101828;

    span {
      color: #667085;
    }
  }
`;

export const ArrowDown = styled(FaArrowDown)`
  width: 12px;
  height: 12px;
  color: #667085;
  cursor: pointer;
`;

export const TableHeader = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f9fafb;
  border: 1px solid #eaecf0;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-bottom: none;
  display: flex;
  align-items: center;
  padding-left: 16px;
`;

export const TableHeaderCell = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  &.client {
    width: 276px;
  }

  &.datetime {
    width: 200px;
  }

  &.value {
    width: 152px;
  }
`;

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
`;

export const TableCell = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  &.client {
    width: 276px;
  }

  &.datetime {
    width: 200px;
  }

  &.value {
    width: 152px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  img {
    width: 28px;
    height: 28px;
    margin-right: 12px;
  }
`;

export const IconsCell = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
`;

export const TrashIcon = styled(FaRegTrashAlt)`
  width: 16px;
  height: 16px;
  color: #212529;
  cursor: pointer;
`;

export const PrinterIcon = styled(BsPrinter)`
  width: 16px;
  height: 16px;
  color: #212529;
  cursor: pointer;
`;

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
