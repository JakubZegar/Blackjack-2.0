import styled from "styled-components/macro";

import {colors} from "../../const/colors"

export const PointsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 32px;

    margin:8px;

    border: 4px solid ${colors.border};
    border-radius: 50%;

    color: ${colors.text};
    font-weight: bold;
    font-size: 15px;
    text-align: center;

    background-color: ${colors.hover};
`