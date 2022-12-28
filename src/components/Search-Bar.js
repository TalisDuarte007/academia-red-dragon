import styled from "styled-components";
import config from "../config.json";

const StyledSearch = styled.div`
    display: flex;
    flex-direction: row;
    border: 1.5px solid red;
    max-width: 425px;
    width: 100%;
    border-radius: 25px;
    overflow: hidden;
    margin: auto;

    input{
        width: 80%;
        padding: 4px 15px;
        border: none;
        outline: none;
        color: #FFFFFF;
        background-color: #313131;
    }

    button{
        flex: 1;
        cursor: pointer;
        border: none;
        background-color: #313131;
        box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
        border-left: 1px solid #313131;
        width: 40px;
        height: 40px;
        @media (min-width: 600px){
            width: 64px;
            height: 40px;
        }
        .btn {
            width: 30px;
            height: auto;
        }
    }
`;

const StylerBoxCenter = styled.div`
    height: 35vh;
    display: flex;
`;


export default function SearchBar(){
    return(
        <StylerBoxCenter>
            <StyledSearch>
            <input type="text"/>
            <button>
                <img className="btn" src={config.btn} alt="#"/>
            </button>
        </StyledSearch>
        </StylerBoxCenter>  
    );
}