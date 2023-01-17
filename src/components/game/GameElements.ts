import styled from "styled-components/macro";

export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  flex: 1;

  width: 100%;
  height: 100%;
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
`;
export const MiddleContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  min-height: 100vh;
  height: 100%;
`;

export const PlayerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
