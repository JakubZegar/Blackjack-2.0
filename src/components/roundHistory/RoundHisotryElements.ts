import styled from "styled-components/macro";

export const RoundHistoryContiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SmallCard = styled.img`
  height: 42px;
  width: 30px;

  margin-left: 2px;
  margin-top: 2px;
`;

export const SmallCardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: stretch;
`;

export const HisotryCardsLabel = styled.h5`
  display: flex;
  justify-self: center;
  align-self: center;

  padding: 0;
  margin: 0 0 0 4px;

  color: white;
  font-weight: bold;
`;

export const RoundStatusLabel = styled.h4`
  margin: 0;
  padding: 1px;

  color: white;
  font-size: 9px;
  font-weight: bold;
`;
