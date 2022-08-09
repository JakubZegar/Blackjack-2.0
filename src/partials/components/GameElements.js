import styled from "styled-components/macro";

export const StyledCard = styled.div`
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
    height: 100vh;
`

export const HandContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`