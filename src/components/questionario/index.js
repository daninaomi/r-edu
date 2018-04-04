import React, { Fragment } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import classnames from 'classnames'
import './questionario.css'
import {mandaRespostas} from '../../actions'
import Main from '../compSimples/main'
import ContainerBox from '../compSimples/container-box'
import FormButton from '../compSimples/form/formButton'
import Form from '../compSimples/form'

class Questionario extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isInvalid: false,            
        }
        this.validate = this.validate.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setResposta = this.setResposta.bind(this)
      
        this.respostas = [];
        this.state = {
            isInvalid: false,
            perguntas:
                [{

                    id: 20,
                    titulo: "Quem descobriu o Brasil",
                    opcaoA: "Joãozinho",
                    opcaoB: "Jonatas",
                    opcaoC: "Geraldo",
                    opcaoD: "Gertrudes",
                    opcaoE: "Pedro Alvarez Cabral",
                    opcaoCorreta: "opcaoE"
                },
                {

                    id: 21,
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
            idaluno: 2
        }

        this.respostas = this.respostas.filter(item => item.idpergunta !== event.target.name).concat(resposta)
    }

    handleSubmit(event) {
        event.preventDefault()

             
           // this.props.mandaRespostas
      this.props.mandaRespostas(this.respostas) 
               
    }




    render() {
        const { mandaRespostas } = this.props
        return (
            <Main>
                <ContainerBox>
                <Form className="cadastro-turma__form" onSubmit={this.handleSubmit}>
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
                                                value="a"
                                            /> A) {pergunta.opcaoA}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                type="radio"

                                                name={pergunta.id}
                                                value="b"
                                            />B) {pergunta.opcaoB}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input
                                                type="radio"

                                                name={pergunta.id}
                                                value="c"
                                            />C){pergunta.opcaoC}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="radio"


                                                name={pergunta.id}
                                                value="d"
                                            />D{pergunta.opcaoD}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="radio"

                                                name={pergunta.id}
                                                value="e"
                                            />E){pergunta.opcaoE}
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
            </Form>
                </ContainerBox >
            </Main >
        )
    }
}

const mapStateToProps = (state, props) => {

    const id = props.match.params.id // const id = 0
    const perguntas = state.perguntas[id]

    return {
        perguntas
    }
}



const mapDispatchToProps = dispatch => ({
    mandaRespostas: (resposta) => {
        dispatch(mandaRespostas(resposta))
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Questionario))

