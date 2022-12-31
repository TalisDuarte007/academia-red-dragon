import styled from "styled-components";
import config from "../config.json";


const StyledBanner =  styled.div`
    display: flex;
    background: url(${config.Imagens.background1}) center;
    background-size: cover;
    width: 100%;
    height: 90vh;
    align-items: center;
    justify-content: center;
    img{
        width: 80%;
        height: auto; 
    }
    @media screen and (max-width: 600px) {
        img{
            width: 90%;
        }
        
    }
`;

export default function Header(){
    return(
        <StyledBanner id="HOME">
            <img src={config.Imagens["logo_full-red"]} alt="logo"/>
        </StyledBanner>
    );
}