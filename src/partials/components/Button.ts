import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../const/colors';

export const MenuButton = styled(Link)`
  display: block;
  height: 32px;
  border: 4px solid ${colors.border};
  background-color: ${colors.primary};
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: ${colors.text};
  margin: 8px;
  padding: 8px;
  border-radius: 32px;
  min-width: 150px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  // NOTE :link, :visited dry
  :link {
    text-decoration: none;
  }

  :visited {
    text-decoration: none;
  }

  :hover {
    scale: 1.1;
    background-color: ${colors.hover};
  }
`;
export const Button = styled.div<{ smallMargin: boolean; isEnabled: boolean }>`
  border-radius: 20px;
  background: ${colors.hover};
  white-space: nowrap;
  padding: 8px 16px;
  color: ${colors.text};
  font-size: 16px;
  min-width: 100px;
  margin: 4px 0;
  margin: ${({ smallMargin }) => (smallMargin ? '4px 4px 4px 4px ' : '8px 8px')};
  border: solid 5px;
  border-color: ${colors.border};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    scale: 1.1;
    background: ${({ isEnabled }) => (isEnabled ? colors.hoverDark : colors.secondary)};
  }
`;
