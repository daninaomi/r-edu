import React, { Fragment } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import classnames from 'classnames'
import './questionario.css'
import { pontuacao } from '../../../actions'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import FormButton from '../../compSimples/form/formButton'
import Form from '../../compSimples/form'

class Pontuacao extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isInvalid: false,
        }
        this.validate = this.validate.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.setAluno = this.setAluno.bind(this)

       
        this.state = {
            isInvalid: false,
            aluno: {
                idaluno: 2
            }


            //this.getInitialState = this.getInitialState(this)
        }
    }
    // Método Padrao de validação para o form
    // componentDidMount(){
    //     this.props.dispatchgetPontuacao()
    // }
    validate(event) {
        console.log('chamou o validate')
        const value = event.target.value
        const name = event.target.name
        this.props.onChange(name, value)
    }

    setAluno(event) {
        const aluno = {
            idaluno: 1
        }

        //this.props.pontuacao = this.state.aluno;
    }

    handleSubmit(event) {
        event.preventDefault()
debugger;

        // this.props.mandaRespostas
        this.props.dispatchpontuacao(this.state.aluno)

    }




    render() {
        const { mandaRespostas } = this.props
        return (
            <Main>
                <ContainerBox>
                    <Form className="cadastro-turma__form" onSubmit={this.handleSubmit}>
                        <h1 className="cadastro__title">Questionario Atividade 1</h1>

                        {this.props.pontuacao && <h3>{this.props.pontuacao.respostas}</h3>}
                        {/* <div onChange={this.setAluno.bind(this)}>
                            

                        </div> */}
                        <FormButton

                            className="cadastro__form-button"
                            type="submit"
                            disabled={this.state.isInvalid}>
                            Pegar Pontuacao
                         </FormButton>
                    </Form>
                </ContainerBox >
            </Main >
        )
    }
}

const mapStateToProps = (state, props) => {

    const id = 2 // const id = 0
    const pontuacao = state.pontuacao[id]
    return {
        pontuacao
    }
}



const mapDispatchToProps = dispatch => ({
    dispatchpontuacao: (aluno) => {
        dispatch(pontuacao(aluno))
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pontuacao))

