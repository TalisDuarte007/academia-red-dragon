import styled from "styled-components";
import config from "../../config.json";


const StyledPlanos = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.6);
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    padding: 20px 150px;
    height: 90vh;
    p{
        font-size: 40px;
        color: #f34336;
        font-weight: 500;
    }
    .boxPlanos{
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        gap: 40px;
        align-items: center;
    }
    .aviso-pagamento--semestral{
        color: #f34336;
        margin-top: 50px;
    }
    .cardPlanos{
        display: flex;
        flex-direction: column;
        background: url(${config.Imagens.background8}) center;
        background-size: 100%;
        box-shadow: 3px 3px 2px 1px black;
        justify-content: space-between;
        width: 270px;
        height: 500px;
        border: 0.8px solid #f34336;
        border-radius: 10px;
        align-items: center;
        gap: 20px;
        padding: 20px;
        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5px;
        }
        
        span{
            color: #f34336;
        }
        .preco{
            font-size: 17px;
            margin-bottom: 15px;
        }
        .box-horarios--academia{
            font-size: 15px;
        }
        .titulo-box--horarios{
            font-size: 17px;
            font-weight: 600;
            margin-bottom: 10px;
        }
        .dias-box--horarios{
            margin-top: 15px;
        }
        .horarios-box--horarios{
            font-size: 15px;
        }
    }
    .cardPlanos:last-child{
        width: 300px;
        height: 530px;
        border: 2px solid #f34336;
        box-shadow: px px 2px 1px black;
        div{
            display: flex;
            flex-direction: column;
            
        }
        .preco{
            font-size: 19px;
            font-weight: 500;
        }
    }

    @media screen and (max-width: 1350px){
        padding: 20px 0;
        .boxPlanos{
            margin-top: 40px;
        }
        .cardPlanos{
            width: 240px;
            height: 480px;
        }
        .cardPlanos:last-child{
        width: 280px;
        height: 510px;
        border: 2px solid #f34336;
        box-shadow: px px 2px 1px black;
        div{
            display: flex;
            flex-direction: column;
            
        }
        .preco{
            font-size: 19px;
            font-weight: 500;
        }
    }
    }
    @media screen and (max-width: 1150px){
        .cardPlanos{
            width: 210px;
            height: 450px;
            
            .horarios-box--horarios{
                font-size: 13px;
            }
            .titulo-box--horarios {
                font-size: 15px;
            }
        }
        .cardPlanos:last-child{
        width: 270px;
        height: 500px;
        }  
    }
    @media screen and (max-width: 1050px){
        .cardPlanos{
            width: 190px;
            height: 420px;
            
            .horarios-box--horarios{
                font-size: 12px;
            }
            .titulo-box--horarios {
                font-size: 14px;
            }
        }
        .cardPlanos:last-child{
            width: 260px;
            height: 490px;
        }  
    }
    @media screen and (max-width: 1050px){
        padding: 0 50px;
        height: 150vh;
        .boxPlanos{
            flex-wrap: wrap
        }
        .cardPlanos{
            width: 220px;
            height: 420px;
        }
        .cardPlanos:last-child{
            width: 230px;
            height: 430px;
        } 
        
    }
    @media screen and (max-width: 579px){
        padding: 0 50px;
        height: 150vh;
        .boxPlanos{
            flex-wrap: wrap
        }
        .cardPlanos{
            width: 190px;
            height: 380px;
        }
        .cardPlanos:last-child{
            width: 190px;
            height: 380px;
        } 
        
    }
    @media screen and (max-width: 520px){
        padding: 0 30px;
        
    }
    @media screen and (max-width: 480px){
        padding: 0 20px;
        gap: 10px;
        
    }
`;



export default function Planos(props) {
    const planos = Object.keys(props.config)
    return(
         <StyledPlanos key={planos}>
             <p id="PLANOS">Planos de Musculação</p>
             <div className="boxPlanos">
                {planos.map((plano) => {
                    const propsPlanos = props.config[plano]
                    const propsPlanosKey = props.config[plano].nome + props.config[plano].forma
                    return(
                        <div className="cardPlanos" key={propsPlanosKey}>
                            <div>
                                <span>{propsPlanos.nome}</span>
                                <span>{propsPlanos.forma}</span>
                            </div>
                            <div>
                                <span className="box-horarios--academia titulo-box--horarios">{props.horarios.texto}</span>
                                <span className="box-horarios--academia dias-box--horarios">{props.horarios.semana}</span>
                                <span className="box-horarios--academia horarios-box--horarios">{props.horarios.horarioSemana}</span>
                                <span className="box-horarios--academia dias-box--horarios">{props.horarios.fimDeSemana}</span>
                                <span className="box-horarios--academia horarios-box--horarios">{props.horarios.horarioFimDeSemana}</span>
                            </div>
                            <div>
                                <span className="preco">{propsPlanos.valor}</span>
                            </div>
                                
                        </div>  
                    )            
                })}
                
            </div>
            <span className="aviso-pagamento--semestral">{props.textos.avisoPagamentoSemestral}</span>
         </StyledPlanos>
    );
}