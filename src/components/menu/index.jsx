import styled from "styled-components";
import BotaoMenu from "./components/botao-menu";
import Botoes from "./components/botoes";
import Links from "./components/links";
import LinksMobile from "./components/links-mobile";

const StyledMenu = styled.div`
    display: flex;
    position: fixed;
    
    background-color: #3a3a39;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    padding: 20px 150px;
    width: 100%;
    @media screen and (max-width: 1350px) {
        padding: 20px 70px;
        
    }
`;

export default function Menu(props) {
    return(
        <StyledMenu>
            <Botoes botoes={props.config.botoes}/>
            <Links links={props.config.Links}/> 
            <LinksMobile links={props.config.Links}/> 
            <BotaoMenu botao={props.config.Imagens.botao_menu}/>     
        </StyledMenu>
    )
}
