import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Container from '../../container'
import Form from '../../form'
import FormInput from '../../form/formInput'
import FormButton from '../../form/formButton'
import { logaUsuario } from '../../../actions'
// import './login.css'


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(name, value, isInvalid) {
        // this[name] = this.name
        this[name] = value
        this.setState({ isInvalid })
    }

    handleSubmit(event) {
        console.log('dados', {
            email: this.email,
            senha: this.senha
        })
        this.props.logaUsuario(event)
    }

    render() {

        const { usuario, logaUsuario } = this.props
        return (

            <div className="login" >
                <h1>Bem-vindo(a)!</h1>

                <Form>
                    <FormInput
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        autoComplete="email"
                        aria-label="email"
                        required
                        onChange={handleChange} />
                    <FormInput
                        type="password"
                        name="password"
                        placeholder="Senha"
                        autoComplete="current-password"
                        aria-label="senha"
                        required
                        onChange={handleChange} />
                    <FormButton
                        className="login__form-button"
                        disabled={this.state.isInvalid}>
                        Entrar
                    </FormButton>
                </Form>
            </div >
        )
    }

}


export default Login