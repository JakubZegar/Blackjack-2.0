import styled from "styled-components/macro";

export const RoundHistoryContiner = styled.div`
  display: flex;
  flex-direction: column;
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
  color: white;
  font-weight: bold;
  padding: 0;
  margin: 0 0 0 4px;
`;

export const RoundStatusLabel = styled.h4`
  color: white;
  font-size: 9px;
  margin: 0;
  padding: 1px;
  font-weight: bold;
`;
