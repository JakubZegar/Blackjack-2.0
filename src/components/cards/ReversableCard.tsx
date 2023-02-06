import React from "react";
import { CardContainer, SingleCard, Avers, Revers } from "./CardElements";

type Props = {
  aversImage: string;
  isReversed: boolean;
};

function ReversableCard({ aversImage, isReversed }: Props) {
  return (
    <CardContainer data-testid='cardHidden'>
      <SingleCard reversed={!isReversed}>
        <Avers aversImage={aversImage} />
        <Revers />
      </SingleCard>
    </CardContainer>
  );
}

export default ReversableCard;
