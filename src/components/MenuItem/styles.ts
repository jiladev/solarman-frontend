import { FaEllipsisVertical } from "react-icons/fa6";

import styled from "styled-components";

interface SelectedProps {
  selected: boolean;
}

export const Container = styled.div<SelectedProps>`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  padding-left: 28px;
  gap: 28px;
  background-color: ${(props) =>
    props.selected ? "rgba(159, 162, 180, 0.08)" : "transparent"};
  position: relative;
  cursor: pointer;

  transition: background-color 0.3s ease-in;

  h1 {
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => (props.selected ? "#dde2ff" : "#a4a6b3")};
  }

  .icon {
    width: 16px;
    height: 16px;
    color: #b3b3b3;
  }
`;

export const MenuIcon = styled(FaEllipsisVertical)<SelectedProps>`
  width: 20px;
  height: 20px;
  color: #ffffff;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  opacity: ${(props) => (props.selected ? 1 : 0)};
  transition: opacity 0.3s ease-in;
`;

export const Selected = styled.div<SelectedProps>`
  width: 3px;
  height: 100%;
  background-color: #dde2ff;
  position: absolute;
  left: 0;
  top: 0;
  opacity: ${(props) => (props.selected ? 1 : 0)};
  transition: opacity 0.3s ease-in;
`;
