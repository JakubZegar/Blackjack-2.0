import styled from "styled-components/macro";

export const GameContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  justify-content: space-between;

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
