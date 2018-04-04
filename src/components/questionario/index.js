import React, { Fragment } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import classnames from 'classnames'
import './questionario.css'
// o botao abrir o questionario ja vai ter o numerodaPergunta ...o get da pergunta que vai carregar o questionario.
// 

import Main from '../compSimples/main'
import ContainerBox from '../compSimples/container-box'
import FormButton from '../compSimples/form/formButton'


class Questionario extends React.Component {

    constructor(props) {
        super(props)
        //this.resposta = this.resposta.bind(this)
        this.validate = this.validate.bind(this)
        //this.handleChange = this.handleChange.bind(this)
        this.setResposta = this.setResposta.bind(this)
        // metodos gerais do form 
        this.respostas = [];
        this.state = {
            isInvalid: false,
            perguntas:
                [{

                    id: 0,
                    titulo: "Quem descobriu o Brasil",
                    opcaoA: "Joãozinho",
                    opcaoB: "Jonatas",
                    opcaoC: "Geraldo",
                    opcaoD: "Gertrudes",
                    opcaoE: "Pedro Alvarez Cabral",
                    opcaoCorreta: "opcaoE"
                },
                {

                    id: 1,
                    titulo: "Quem descobriu o Brasil",
                    opcaoA: "Joãozinho",
                    opcaoB: "Jonatas",
                    opcaoC: "Geraldo",
                    opcaoD: "Gertrudes",
                    opcaoE: "Pedro Alvarez Cabral",
                    opcaoCorreta: "opcaoE"
                }]


            //this.getInitialState = this.getInitialState(this)
        }
    }
    // Método Padrao de validação para o form
    validate(event) {
        console.log('chamou o validate')
        const value = event.target.value
        const name = event.target.name
        this.props.onChange(name, value)
    }

    setResposta(event) {
        const resposta = {
            opcao: event.target.value,
            idpergunta: event.target.name,
            idaluno: 12121212
        }

        this.respostas = this.respostas.filter(item => item.idpergunta !== event.target.name).concat(resposta)
    }

    handleSubmit(event) {
        event.preventDefault()

        if (!this.state.isInvalid) {
            const resposta = {

                // opcao: ?opcaoA,
                // idpergunta:this.pergunta.id,
                // idaluno: this.aluno.id,

            }
            this.props(resposta)

            // this.props.history.push('/desafio..')
        }
    }




    render() {
        const { user, gravarResposta, selecionarUsuario } = this.props
        return (
            <Main>
                <ContainerBox>
                    <h1 className="cadastro__title">Questionario Atividade 1</h1>
                    <div onChange={this.setResposta.bind(this)}>
                        <table>

                            {this.state.perguntas.map((pergunta) => (
                                <React.Fragment>
                                    <tr>
                                        <td name={pergunta.id} value={pergunta.id}>
                                            {pergunta.id} {pergunta.titulo}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                type="radio"

                                                name={pergunta.id}
                                                value="opcaoA"
                                            /> A) {pergunta.opcaoA}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                type="radio"

                                                name={pergunta.id}
                                                value="opcaoB"
                                            />B) {pergunta.opcaoB}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                type="radio"

                                                name={pergunta.id}
                                                value="opcaoC"
                                            />C{pergunta.opcaoC}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="radio"


                                                name={pergunta.id}
                                                value="opcaoD"
                                            />D{pergunta.opcaoD}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="radio"

                                                name={pergunta.id}
                                                value="opcaoE"
                                            />E{pergunta.opcaoE}
                                        </td>
                                    </tr>
                                </React.Fragment>
                            ))}

                        </table>
                    </div>
                    <FormButton

                        className="cadastro__form-button"
                        type="submit"
                        disabled={this.state.isInvalid}>
                        Enviar Respostas
            </FormButton>
                </ContainerBox >
            </Main >
        )
    }
}




export default (Questionario)