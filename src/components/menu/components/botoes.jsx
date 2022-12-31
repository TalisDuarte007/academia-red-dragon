import styled from "styled-components";

const StyledBotoes = styled.div`
  display: flex;
  flex-direction: row;
  .logo-social {
    width: 30px;
    margin-right: 30px;
  }
`;

export default function Botoes(props) {
  const botoes = Object.keys(props.botoes);
  return (
    <StyledBotoes key={botoes}>
      {botoes.map((botao) => {
        return (
          <a className="box-logo" href={props.botoes[botao].url} key={botao}>
            <img className="logo-social" src={props.botoes[botao].logo} alt="#"/>
          </a>
        );
      })}
    </StyledBotoes>
  );
}
