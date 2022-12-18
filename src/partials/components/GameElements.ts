import styled from "styled-components/macro";
import {colors} from "../../const/colors"

export const StyledCard = styled.div<{image: string}>`
    background-image: ${({image}) => 'url(' + image + ')' };
    background-size:cover;
    background-position:center;
    border-radius: 4px;
    width: 100px;
    height: 140px;    
    margin: 4px;
    
`

export const GameContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    flex: 1;
    width: 100%;
    height: 100%;
`

export const SideContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`
export const MiddleContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    height: 100%;
`

export const HandContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const PlayerSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PointsWrapper = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:8px;
    border: 4px solid ${colors.border};
    color: ${colors.text};
    background-color: ${colors.hover};
    font-weight: bold;
    font-size: 15px;
    text-align: center;
`