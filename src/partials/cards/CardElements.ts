import styled from "styled-components/macro";

import cardBackground from '../../assets/cardBack.png';

export const StyledCard = styled.div<{image: string}>`
    height: 140px;    
    width: 100px;
    margin: 4px;
    background-image: ${({image}) => 'url(' + image + ')' };
    background-size:cover;
    background-position:center;
    border-radius: 4px;
`

export const HandContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  width: 100px;
  height: 140px;
  z-index: 12;
  margin: 4px;
`;

export const SingleCard = styled.div<{ reversed: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease-in-out;
  transform: ${({ reversed }) => (reversed ? 'rotateY(180deg)' : 'none')};
`;

export const Avers = styled.div<{ aversImage: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-image: ${({ aversImage }) => ('url(' + aversImage + ')')};
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`;

export const Revers = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-image: url(${cardBackground});
  background-size: cover;
  background-position: center;
  transform: rotateY(180deg);
  border-radius: 4px;
`;