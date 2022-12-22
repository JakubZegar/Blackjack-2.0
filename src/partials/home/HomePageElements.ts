import styled from "styled-components";
import tabletopImage from '../../assets/table-background.jpg'

export const HomePageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    min-height: 100vh;
    height: 100%;
    width: 100%;

    background-image: url(${tabletopImage});
    background-size:cover;
    background-attachment: fixed;
    background-position:center;
`