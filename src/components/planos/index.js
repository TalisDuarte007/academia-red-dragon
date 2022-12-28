import styled from "styled-components";


const StyledPlanos = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.6);
    //background-image: url(https://uploaddeimagens.com.br/images/004/275/823/original/%E2%80%94Pngtree%E2%80%94carbon_fiber_modern_dark_black_1576247.png?1672181168);
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
    padding: 20px 150px;
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
        background-color: #2d2d2c;
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
`;



export default function Planos(props) {
    const planos = Object.keys(props.config)
    return(
         <StyledPlanos key={planos}>
             <p>Planos de Musculação</p>
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