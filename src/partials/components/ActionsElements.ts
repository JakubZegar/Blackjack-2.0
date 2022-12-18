import styled from "styled-components";

export const ActionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
    flex-direction: column;
  }
`
