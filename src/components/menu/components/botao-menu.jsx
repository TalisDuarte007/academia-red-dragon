import styled from "styled-components";
import { menuShow } from "../scripts/menushow";

const StyledBotao = styled.div`
  display: none;
  .icon-menu{
    width: 30px;
    height: auto;
  }
  button{
    background-color: transparent;
    border-radius: 7px;
    padding: 4px;
  }
  @media screen and (max-width: 730px) {
    display: flex;
  } 
`;

export default function BotaoMenu(props) {
  return (
    <StyledBotao key={props.botao}>
        <button onClick={menuShow}><img className="icon-menu" src={props.botao} alt="icone botão de menu"/></button>
    </StyledBotao>
  );
}
