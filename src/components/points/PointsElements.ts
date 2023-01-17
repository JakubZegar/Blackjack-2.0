import styled from "styled-components/macro";

import { colors } from "../../const/colors";

export const PointsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  margin: 8px;
  border: 4px solid ${colors.border};
  border-radius: 50%;

  background-color: ${colors.hover};

  color: ${colors.text};
  font-weight: bold;
  font-size: 15px;
  text-align: center;
`;

export const MessageWrapper = styled.h2`
  padding: 8px;

  color: ${colors.text};
  font-size: 40ointspx;
  font-weight: bold;
`;
