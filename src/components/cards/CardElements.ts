import styled from "styled-components/macro";

import cardBackground from "../../assets/cardBack.png";

export const StyledCard = styled.div<{ image: string }>`
  height: 140px;
  width: 100px;
  margin: 4px;
  border-radius: 4px;

  background-image: ${({ image }) => "url(" + image + ")"};
  background-size: cover;
  background-position: center;
`;

export const HandContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardContainer = styled.div`
  position: relative;
  z-index: 12;

  display: flex;
  width: 100px;
  height: 140px;
  margin: 4px;
`;

export const SingleCard = styled.div<{ reversed: boolean }>`
  position: absolute;

  transform-style: preserve-3d;
  transition: all 0.5s ease-in-out;
  transform: ${({ reversed }) => (reversed ? "rotateY(180deg)" : "none")};

  width: 100%;
  height: 100%;
`;

export const Avers = styled.div<{ aversImage: string }>`
  position: absolute;

  backface-visibility: hidden;

  width: 100%;
  height: 100%;
  border-radius: 4px;

  background-image: ${({ aversImage }) => "url(" + aversImage + ")"};
  background-size: cover;
  background-position: center;
`;

export const Revers = styled.div`
  position: absolute;

  backface-visibility: hidden;

  transform: rotateY(180deg);

  width: 100%;
  height: 100%;
  border-radius: 4px;

  background-image: url(${cardBackground});
  background-size: cover;
  background-position: center;
`;
