import styled from 'styled-components/macro';

import { breakpoints } from '../../const/breakpoints';

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;
