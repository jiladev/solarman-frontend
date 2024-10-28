import { FaRegTrashAlt } from "react-icons/fa";
import { BsPrinter } from "react-icons/bs";
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