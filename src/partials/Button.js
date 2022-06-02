import { Link } from "react-router-dom";
import styled from "styled-components";
import {colors} from "../const/colors";

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
`
