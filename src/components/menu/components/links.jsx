import styled from "styled-components";
import { useState } from "react";


const StyledLinks = styled.div`
    display: flex;
    gap: 40px;

    .spanLinks{
        font-size: 18px;
        color: #f34336;
        border: solid 2px transparent ;
        padding: 5px;
    }
    .spanLinks:hover{
        border-bottom: solid 3px #f34336 ;
        text-decoration: none;
    }

    @media screen and (max-width: 1150px){
        gap: 25px  
    }
    @media screen and (max-width: 800px){        
        .menu{
            border: solid 1px black;
            border-right:  none;
            display: flex;
            flex-direction: column;
            gap: 0;
            background-color: #3a3a39;
            position: absolute;
            top: 75px;
            right: 0;
            width: 50vw;
            height: 92vh;
            align-items: center;
            justify-content: space-around;
            transform: translateX(100%);
            transition: transform 0.3s ease-in;
        }
        .menu.menuOpen{
            transform: translateX(0);
        }
    }
`;

const StyledBotao = styled.div`
    display: none;
    position: absolute;
    z-index: 4;
    right: 100px;
    width: fit-content;
    height: 40px;
    cursor: pointer;

    .hamburguer{
        top: 50%;
        left: 10%;
        width: 30px;
        height: 4px;
        background-image: linear-gradient(to right, #f34336 , black);
        position: absolute;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        transition: 0.5s;
    }
    .hamburguer:before{
        top: -12px;
        content: "";
        width: 30px;
        height: 4px;
        background-image: linear-gradient(to right, #f34336 , black);
        position: absolute;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        transition: 0.5s;
    }
    .hamburguer:after{
        top: +12px;
        content: "";
        width: 30px;
        height: 4px;
        background-image: linear-gradient(to right, #f34336 , black);
        position: absolute;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        transition: 0.5s;
    }

    .icon.iconActive .hamburguer{
        background: transparent;
        transform: rotate(180deg);
    }
    .icon.iconActive .hamburguer:after{
        top: 50%;
        background-image: linear-gradient(to right, #f34336 , black);
        transform: rotate(225deg);
        box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
    }
    .icon.iconActive .hamburguer:before{
        top: 50%;
        background-image: linear-gradient(to right, #f34336 , black);
        transform: rotate(135deg);
        box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
    }
    @media screen and (max-width: 800px) {
        display: block;
    }  
`;

export default function Links(props){
    const links = Object.keys(props.links);
    const [active, setMode] = useState(false)
    const ToggleMode = () => {
        setMode(!active)
    }
    return(
        <>
            <StyledLinks key={links}>
                    <div className={active ? "menu menuOpen" : "menu menuClosed"}>
                    {links.map((link) => {
                                return(
                                    <a href={props.links[link]} key={link}>
                                    <span className="spanLinks">{link}</span>
                                </a>
                            )
                        })}  
                    </div>
                                
            </StyledLinks>
            <StyledBotao key={props.botao}>
                <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
                    <div className="hamburguer hamburguerIcon"></div>
                </div>
            </StyledBotao>

        </>
            
    )
}