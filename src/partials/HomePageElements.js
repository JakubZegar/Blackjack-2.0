import styled from "styled-components";
import tabletopImage from '../assets/table-background.jpg'

export const HomePageContainer = styled.div`
    background-image: url(${tabletopImage});
    background-size:cover;
    background-attachment: fixed;
    background-position:center;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    
`