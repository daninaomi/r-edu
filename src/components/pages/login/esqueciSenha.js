import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Form from '../../compSimples/form'
import FormInput from '../../compSimples/form/formInput'
import FormButton from '../../compSimples/form/formButton'
import LinkButton from '../../compSimples/linkButton'
// import { logaUser } from '../../../actions'
import './login.css'


class EsqueciSenha extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(name, value, isInvalid) {
        this[name] = value
        this.setState({ isInvalid })
    }

    handleSubmit(event) {
        event.preventDefault()

        if (!this.state.isInvalid) {
            const user = {
                email: this.email
            }
            // this.props.logaUser(event, user)

            this.props.history.push('/')
        }
    }

    render() {

        return (

            <Main>
                <ContainerBox>
                    <h1 className="login__title">Esqueceu sua senha?</h1>

                    <Form className="login__form" onSubmit={this.handleSubmit}>
                        <FormInput
                            className="login__form-input"
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            autoComplete="email"
                            aria-label="email"
                            required
                            onChange={this.handleChange} />

                        <FormButton
                            className="login__form-button"
                            type="submit"
                            disabled={this.state.isInvalid}>
                            Enviar e-mail para redefinir senha
                        </FormButton>
                    </Form>

                </ContainerBox>
            </Main>
        )
    }
}


// const mapDispatchToProps = dispatch => ({
//     logaUser: (event, user) => {
//         event.preventDefault()
//         dispatch(logaUser(user))
//     }
// })



export default withRouter(EsqueciSenha)