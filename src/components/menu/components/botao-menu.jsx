import styled from "styled-components";

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
  @media screen and (max-width: 800px) {
    display: block;
  } 
`;

export default function BotaoMenu(props) {
  return (
    <StyledBotao className="mobileMenu" key={props.botao}>
        <button><img className="icon-menu" src={props.botao} alt="icone botão de menu"/></button>
    </StyledBotao>
  );
}
