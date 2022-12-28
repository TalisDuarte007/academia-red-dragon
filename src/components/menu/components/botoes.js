import styled from "styled-components";

const StyledBotoes = styled.div`
  display: flex;
  flex-direction: row;
  .logo-social {
    width: 30px;
    margin-right: 30px;
  }
`;

// const StyledLogo = styled.div`
//     background-color: whitesmoke;
//     display: flex;
//     border: 1px solid red;
//     border-radius: 100%;
//     margin: auto;
//     align-items: center;

// `;

export default function Botoes(props) {
  const botoes = Object.keys(props.botoes);
  return (
    <StyledBotoes key={botoes}>
      {botoes.map((botao) => {
        return (
          <a className="box-logo" href={props.botoes[botao].url} key={botao}>
            <img className="logo-social" src={props.botoes[botao].logo} alt="#"/>
            {/* <span>{props.botoes[botao].span}</span> */}
          </a>
        );
      })}
    </StyledBotoes>
  );
}
