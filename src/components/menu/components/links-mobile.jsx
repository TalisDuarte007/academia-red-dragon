import styled from "styled-components";
import config from "../../../config.json"


const StyledLinksMobile = styled.div`
    display: none;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    background: url(${config.Imagens.background10}) no-repeat;
    background-size: cover;
    padding: 60px;
    padding-right: 80px;
    border-radius: 10px;
    .span-links{
        font-size: 18px;
        color: #f34336;
        border: solid 2px transparent ;
        padding: 5px;
    }
    .span-links:hover{
        border-bottom: solid 3px #f34336 ;
        text-decoration: none;
    }
    .open{
        display: block;
    }
    

`;

export default function LinksMobile(props){
    const links = Object.keys(props.links);
    return(
            <StyledLinksMobile className="mobileMenu" id="mobileMenu" key={links}>
                {links.map((link) => {
                    return(
                        <a href={props.links[link]} key={link}>
                        <span className="span-links">{link}</span>
                    </a>
                )
            })}                
        </StyledLinksMobile>
    )
}