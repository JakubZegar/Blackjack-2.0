import styled from "styled-components";
import { colors } from "../../const/colors";

export const BetText = styled.p`
  margin: 12px 0 12px 0;
  color: white;
  text-align: center;
`;

export const BetCoin = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 8px solid black;
  border-radius: 50%;
  margin: 1px;
  background-color: ${colors.primary};
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
  align-items: center;
  justify-content: center;
  width: 120px;
  margin: 3px 0 3px 0;
  border: 8px solid black;
  border-radius: 25px;
  background-color: ${colors.hover};
`;

export const BalanceText = styled.p`
  color: white;
  margin: 12px 0 12px 0;
  text-align: center;
`;

export const BetConiText = styled.p`
  color: white;
  text-align: center;
`;
