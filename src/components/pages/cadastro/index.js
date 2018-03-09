import React from 'react'
import { Link} from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Main from '../../main'
import ContainerBox from '../../container-box'
import Form from '../../form'
import FormInput from '../../form/formInput'
import FormButton from '../../form/formButton'
import { selecionarUserType } from '../../../actions'
import './cadastro.css'


class Cadastro extends React.Component {
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
            const user = {
                userType: this.userType,
            }
            this.props.selecionarUserType(event, user)

            this.props.history.push('/cadastroProfAluno')
        }
    }

    render() {

        const { user, selecionarUserType } = this.props

        return (
            <Main>
                <ContainerBox>
                    <h1 className="cadastro__title">Você é:</h1>
                    <Form className="cadastro__form" onSubmit={this.handleSubmit}>
                        <FormInput
                            className="cadastro__form-input"
                            type="radio"
                            name="userType"
                            id="type-professor"
                            value="professor"
                            onChange={this.handleChange}
                            required />
                        <label htmlFor="type-professor"> Professor(a) </label>
                        <FormInput
                            className="cadastro__form-input"
                            type="radio"
                            name="userType"
                            id="type-aluno"
                            value="aluno"
                            onChange={this.handleChange}
                            required />
                        <label htmlFor="type-aluno"> Aluno(a) </label>

                        <FormButton
                            className="cadastro__form-button"
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
    selecionarUserType: (userType) => {
        dispatch(selecionarUserType(userType))
    }
})

withRouter(connect(mapDispatchToProps)(FormButton))


export default connect(null, mapDispatchToProps)(Cadastro)

// const mapStateToProps = state => ({
//     userType: state.userType
// })