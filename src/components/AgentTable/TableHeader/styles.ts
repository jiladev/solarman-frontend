import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

import styled from "styled-components";

interface ArrowProps {
  selected: boolean;
}

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

  h2 {
    font-size: 12px;
    font-weight: 400;
    color: #8a92a6;
    margin-right: 16px;
  }
`;

export const TableHeaderCell = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  &.client {
    width: 276px;
  }

  &.reports {
    width: 200px;
  }
`;

export const ArrowUp = styled(FaArrowUp)<ArrowProps>`
  width: 12px;
  height: 12px;
  color: ${(props) => (props.selected ? "#ff8a12" : "#667085")};
  cursor: pointer;
`;

export const ArrowDown = styled(FaArrowDown)<ArrowProps>`
  width: 12px;
  height: 12px;
  color: ${(props) => (props.selected ? "#ff8a12" : "#667085")};
  cursor: pointer;
`;
