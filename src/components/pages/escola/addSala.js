import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Form from '../../compSimples/form'
import Select from '../../compSimples/form/select'
import FormButton from '../../compSimples/form/formButton'
import { addSala } from '../../../actions'
// import './escolha.css'


class AddSala extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(name, value, isInvalid) {
        this[name] = value;
        this.setState({ isInvalid })
    }

    handleSubmit(event) {
        event.preventDefault()

        if (!this.state.isInvalid) {
            const sala = {
                // escola: this.escola,
                ano: this.ano,
                denominacao: this.denominacao
            }

            this.props.addSala(sala)

            this.props.history.push('/addAlunos')
        }
    }

    render() {

        const { sala, addSala } = this.props

        return (
            <Main>
                <ContainerBox >
                    <h1 className="escolha__title">Sala Nova:</h1>
                    <Form className="escolha__form" onSubmit={this.handleSubmit}>

                        <Select
                            className="cadastro__form-select"
                            name="ano"
                            required>
                            <option value="" disabled selected>Ano</option>
                            <option value="ano1">6º ano</option>
                            <option value="ano2">7º ano</option>
                            <option value="ano3">8º ano</option>
                            <option value="ano4">9º ano</option>
                        </Select>
                        <Select
                            className="cadastro__form-select"
                            name="denominacao"
                            required>
                            <option value="" disabled selected>Denominação</option>
                            <option value="denominacao1">A</option>
                            <option value="denominacao2">B</option>
                            <option value="denominacao3">C</option>
                            <option value="denominacao3">D</option>
                        </Select>

                        <FormButton
                            className="escolha__form-button"
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


const mapDispatchToProps = dispatch => ({
    addSala: (sala) => {
        dispatch(addSala(sala))
    }
})


export default withRouter(connect(null, mapDispatchToProps)(AddSala))

// const mapStateToProps = state => ({
//     userType: state.userType
// })