import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Form from '../../compSimples/form'
import FormButton from '../../compSimples/form/formButton'
// import { cadastraDesafio } from '../../../actions'
import './cadastro-turma.css'
import FaUserPlus from 'react-icons/lib/fa/user-plus'


class AddDesafio extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

            this.props.cadastraDesafio(aula)

        }
    }

    render() {

        const { desafio, cadastraDesafio } = this.props

        return (

            <Main>
                <ContainerBox >
                    <h1 className="cadastro__title">{this.props.desafio.nome}</h1>
                    <Form className="cadastro-turma__form" onSubmit={this.handleSubmit}>

                        {this.props.disciplinas.map(disciplina => (
                            <Card className="desafios__card" >
                                <h2 className="desafios__card-title">{disciplina.nome}</h2>
                                <Link to={`/addProf`}>
                                    <FormButton onChange={this.handleChange}>
                                        <FaUserPlus />
                                    </FormButton>
                                </Link>
                            </Card>
                        ))}

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

    const id = props.match.params.id // const id = 0
    const turma = state.turmas[id]

    return {
        turma,
        desafios: desafios.map(desafio => { // desafio = 1 [{...}, {....}]
            return state.desafios[desafio];
        })
    }
}


const mapDispatchToProps = dispatch => ({
    cadastraDesafio: (desafio) => {
        dispatch(cadastraDesafio(desafio))
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddDesafio))
