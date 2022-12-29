import styled, { keyframes } from "styled-components";

const preloaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Preloader = styled.div`
  &:after {
    content: "";
    display: block;

    animation: ${preloaderAnimation} 1.2s linear infinite;

    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
  }
`;
