import styled from "styled-components";
import config from "../config.json"


const StyledBanner =  styled.div`
    background: url(${config.bg}) center;
    background-size: cover;
    min-height: 230px;
    height: 61vh;
`;

export default function Header(){
    return(
        <StyledBanner />
    );
}