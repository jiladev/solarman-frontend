import styled from "styled-components";

export const Container = styled.div`
  width: 256px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #363740;
  color: #dde2ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;

export const Logo = styled.img`
  width: 163px;
  height: 65px;
  margin: 20px 0;
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
