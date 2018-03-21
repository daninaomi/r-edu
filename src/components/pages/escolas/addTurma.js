import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Form from '../../compSimples/form'
import Select from '../../compSimples/form/select'
import FormButton from '../../compSimples/form/formButton'
import { cadastraTurma } from '../../../actions'
import './cadastro-turma.css'


class AddTurma extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        
        if (value === '') {
            this.setState({ isInvalid: true })
        }

        this[name] = value;
    }

    handleSubmit(event) {
        event.preventDefault()

        if (!this.state.isInvalid) {
            const turma = {
                idEscola: this.props.match.params.id,
                idSala: this.sala
            }

            this.props.cadastraTurma(turma)

        }
    }

    render() {

        const { turma, cadastraTurma } = this.props

        return (

            <Main>
                <ContainerBox >
                    <h1 className="cadastro__title">Turma Nova</h1>
                    <Form className="cadastro-turma__form" onSubmit={this.handleSubmit}>

                        <Select
                            className="cadastro-turma__form-select"
                            name="ano"
                            onChange={this.handleChange}
                            required>
                            <option value="" disabled selected>Turma</option>
                            <option value="ano1">6º A</option>
                            <option value="ano1">6º B</option>
                            <option value="ano1">6º C</option>
                            <option value="ano1">6º D</option>
                            <option value="ano2">7º A</option>
                            <option value="ano2">7º B</option>
                            <option value="ano2">7º C</option>
                            <option value="ano2">7º D</option>
                            <option value="ano3">8º A</option>
                            <option value="ano3">8º B</option>
                            <option value="ano3">8º C</option>
                            <option value="ano3">8º D</option>
                            <option value="ano4">9º A</option>
                            <option value="ano4">9º B</option>
                            <option value="ano4">9º C</option>
                            <option value="ano4">9º D</option>
                        </Select>

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
    const escola = state.escolas[id]

    return {
        escola
    }
}


const mapDispatchToProps = dispatch => ({
    cadastraTurma: (turma) => {
        dispatch(cadastraTurma(turma))
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddTurma))

// const mapStateToProps = state => ({
//     userType: state.userType
// })