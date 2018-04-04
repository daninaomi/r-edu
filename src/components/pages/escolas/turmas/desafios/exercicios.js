import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { listaPerguntas, listaTurmas } from '../../../../../actions'
import Main from '../../../../compSimples/main'
import ContainerBox from '../../../../compSimples/container-box'
import Card from '../../../../card'
import './exercicios.css'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'


class Exercicios extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        this.props.dispatchListaTurmas()
        this.props.dispatchListaPerguntas()
    }


    render() {

        const { turma, perguntas } = this.props

        return (


            <Main className="escolas__main">

                <ContainerBox className="escolas__container">

                  <h1 className="desafios__title">Lista de exercícios</h1>

                    <table>

                    {this.props.perguntas && this.props.perguntas.map((pergunta) => (
                            <div className="exercicio">
                                <tr>
                                    <td>
                                        <div className="pergunta-number">{pergunta.id}</div>
                                        {pergunta.titulo}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="respostas-options">
                                        <input
                                            type="radio"
                                            name={pergunta.id}
                                            value="opcaoA"
                                        />
                                        <div className="resposta"> a) {pergunta.opcaoA} </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="respostas-options">
                                        <input
                                            type="radio"
                                            name={pergunta.id}
                                            value="opcaoB"
                                        />
                                        <div className="resposta"> b) {pergunta.opcaoB} </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="respostas-options">
                                        <input
                                            type="radio"
                                            name={pergunta.id}
                                            value="opcaoC"
                                        />
                                        <div className="resposta"> c) {pergunta.opcaoC} </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="respostas-options">
                                        <input type="radio"
                                            name={pergunta.id}
                                            value="opcaoD"
                                        />
                                        <div className="resposta"> d) {pergunta.opcaoD} </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="respostas-options">
                                        <input type="radio"
                                            name={pergunta.id}
                                            value="opcaoE"
                                        />
                                        <div className="resposta"> e) {pergunta.opcaoE}</div>
                                    </td>
                                </tr>
                            </div>
                        ))}
                    </table>
                </ContainerBox>
            </Main>
        )
    }
}

const mapStateToProps = (state, props) => {

    const id = props.match.params.id
    const turma = state.turmas[id]

    return {
        turma,
        perguntas: Object.keys(state.perguntas).map(key => {
            return state.perguntas[key]
        })
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchListaTurmas: () => {
        dispatch(listaTurmas())
    },
    dispatchListaPerguntas: () => {
        dispatch(listaPerguntas())
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Exercicios))
