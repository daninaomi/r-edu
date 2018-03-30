import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Main from '../../../../compSimples/main'
import ContainerBox from '../../../../compSimples/container-box'
import Card from '../../../../card'
import Form from '../../../../compSimples/form'
import FormButton from '../../../../compSimples/form/formButton'
import { listaDisciplinas, cadastraAula, listaDesafios, listaTurmas } from '../../../../../actions'
// import './cadastro-desafio.css'
import FaUserPlus from 'react-icons/lib/fa/user-plus'


class CadastraDesafio extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
      this.props.dispatchListaTurmas()
      this.props.dispatchListaDesafios()
      this.props.dispatchListaDisciplinas()
    }

    handleChange(name, value, isInvalid) {
        // if (value === '' || !this.addProf[value].checked) {
        if (value === '' ) {
            this.setState({ isInvalid: true })
        }
        this[name] = value;
    }

    handleSubmit(event) {
        event.preventDefault()

        if (!this.state.isInvalid) {
            const aula = {
                // "idProfessor": 2,
                // "idTurma": 2,
                // "idDisciplina": 2,
                // "idDesafio": 2
            }

            // this.props.cadastraAula(aula)
        }
    }

    render() {

        const { disciplinas, desafio } = this.props
        console.log('nome desafio', desafio)

        return (

            <Main>
                <ContainerBox >
                {this.props.desafio &&
                    <h1 className="cadastro__title">{this.props.desafio.nome}</h1>
                  }
                    <Form className="cadastro-turma__form" onSubmit={this.handleSubmit}>

                        {this.props.disciplinas && this.props.disciplinas.map(disciplina => (
                            <Card className="desafios__card" >
                                <h2 className="desafios__card-title">{disciplina.nome}</h2>
                                <Link to={`/cadastra-desafio`}>
                                    <FormButton onChange={this.handleChange}>
                                        <FaUserPlus />
                                    </FormButton>
                                </Link>
                            </Card>
                        ))}
                    </Form>

                    <Form>

                        <FormButton
                            className="cadastro-turma__form-button"
                            type="submit"
                            disabled={this.state.isInvalid}>
                            Continuar
                        </FormButton>
                    </Form>
                    
                </ContainerBox>
            </Main>
        )
    }
}

const mapStateToProps = (state, props) => {

    const id = props.match.params.id
    const turma = state.turmas[id]
    const desafio = state.desafios
    const disciplinas = state.disciplinas

    return {
        turma,
        desafio,
        disciplinas: Object.keys(state.disciplinas).map(key => {
            return state.disciplinas[key]
        })
    }
}


const mapDispatchToProps = dispatch => ({
    cadastraAula: (aula) => {
        dispatch(cadastraAula(aula))
    },
    dispatchListaTurmas: () => {
        dispatch(listaTurmas())
    },
    dispatchListaDesafios: () => {
        dispatch(listaDesafios())
    },
    dispatchListaDisciplinas: () => {
        dispatch(listaDisciplinas())
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CadastraDesafio))
