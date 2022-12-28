import styled from "styled-components";
import { CSSReset } from "../components/CSSReset"
import Header from "../components/Header"
import config from "../config.json";
import Menu from "../components/menu";
import Planos from "../components/planos";

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StyledMainPage = styled.div`
    height: 100vh;
`;

function HomePage() {
    return(
        <>
            <CSSReset/>
            <StyledPage>
                <Menu config={config} />
                <StyledMainPage>
                    <Header/>
                    <Planos textos={config.Textos} horarios={config.Horarios} config={config.Planos}/>
                </StyledMainPage>
                
            </StyledPage>
        </>  
    )
}

export default HomePage