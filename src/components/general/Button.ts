import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../const/colors";

export const MenuButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 32px;
  min-width: 150px;
  border: 4px solid ${colors.border};
  border-radius: 32px;
  margin: 8px;
  padding: 8px;

  background-color: ${colors.primary};

  color: ${colors.text};
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease-in-out;

  :link,
  :visited {
    text-decoration: none;
  }

  :hover {
    scale: 1.1;
    background-color: ${colors.hover};
  }
`;
export const Button = styled.div<{ smallMargin?: boolean; isEnabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease-in-out;

  min-width: 100px;
  border: solid 5px;
  border-color: ${colors.border};
  border-radius: 20px;
  background: ${colors.hover};
  padding: 8px 16px;
  margin: 4px 0;
  margin: ${({ smallMargin }) => (smallMargin ? "4px 4px 4px 4px " : "8px 8px")};

  white-space: nowrap;
  color: ${colors.text};
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    scale: 1.1;

    background: ${({ isEnabled }) => (isEnabled ? colors.hoverDark : colors.secondary)};
  }
`;
