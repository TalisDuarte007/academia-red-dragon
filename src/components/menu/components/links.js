import styled from "styled-components";

const StyledLinks = styled.div`
    display: flex;
    gap: 40px;

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

    @media screen and (max-width: 1150px){
        gap: 25px  
    }

`;

export default function Links(props){
    const links = Object.keys(props.links);
    return(
        <StyledLinks key={links}>
            {links.map((link) => {
                return(
                    <a href="{props.links[link]}" key={link}>
                        <span className="span-links">{link}</span>
                    </a>
                )
            })}                
        </StyledLinks>
    )
}