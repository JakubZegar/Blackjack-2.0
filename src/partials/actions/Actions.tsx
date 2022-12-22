import React from 'react';

import { ActionContainer } from './ActionsElements';
import { Button } from '../general/Button';

type Props = {
  drawFunction: () => void;
  passRound: () => void;
};

export default function Actions({ drawFunction, passRound }: Props) {
  return (
    <ActionContainer>
      <Button isEnabled={true} onClick={drawFunction}>Draw</Button>
      <Button isEnabled={true}>Double</Button>
      <Button isEnabled={true} onClick={passRound}>Pass</Button>
    </ActionContainer>
  );
};