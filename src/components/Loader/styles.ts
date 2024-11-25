import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    left: 0;
  }

  25% {
    left: calc(100% - 20px);
  }

  50% {
    left: calc(100% - 20px);
  }

  75%, 100% {
    left: 0;
  }
`;

export const Loader = styled.div`
  position: relative;
  width: 100px;
  height: 20px;
`;

export const LoaderSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  display: block;
  box-shadow: 0 0 20px #ff8a12;
  background: #ff8a12;
  animation: ${animate} 2s ease-in-out infinite;
  animation-delay: calc(0.08s * var(--i));
  filter: url(#liquid);
`;

export const LoaderSVG = styled.svg`
  width: 0;
  height: 0;
`;
