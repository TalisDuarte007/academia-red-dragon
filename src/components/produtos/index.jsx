import styled from "styled-components";
import config from "../../config.json"

const StyledProdutos = styled.div`
    display: flex;
    background: url(${config.Imagens.grass});
    background-size: 100%;
    height: 100%;
`;

export default function Produtos(props){
    return(
        <StyledProdutos>
            <p id="PRODUTOS">teste</p>
        </StyledProdutos>      
    );   

}