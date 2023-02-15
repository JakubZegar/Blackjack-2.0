import styled from "styled-components";
import { colors } from "../../const/colors";

export const BetText = styled.h5`
  color: white;
  margin: 12px 0 12px 0;
  text-align: center;
`;

export const BetCoin = styled.button`
  display: flex;
  width: 50px;
  height: 50px;
  background-color: ${colors.primary};
  border: 8px solid black;
  border-radius: 50%;
  margin: 1px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ disabled }) => (disabled ? colors.secondary : colors.hover)};
  }
`;

export const BalanceContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const Balance = styled.div`
  background-color: ${colors.hover};
  align-items: center;
  justify-content: center;
  border: 8px solid black;
  width: 120px;
  margin: 3px 0 3px 0;
  border-radius: 25px;
`;

export const BalanceText = styled.h4`
  color: white;
  margin: 12px 0 12px 0;
  text-align: center;
`;

export const BetConiText = styled.h3`
  color: white;
  text-align: center;
`;
