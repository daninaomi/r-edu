import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import Form from '../../form'
import FormInput from '../../form/formInput'
import FormButton from '../../form/formButton'
import { logaUser } from '../../../actions'
import './login.css'


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
        const user = {
            email: this.email,
            senha: this.senha
        }
        this.props.logaUser(event, user)
    }

    render() {

        const { user, logaUser } = this.props

        return (
            user ? (
                <Redirect to="/" />
            ) : (
                    <main className="login">
                        <div className="login-box" >
                            <h1 className="login__title">Bem-vindo(a)!</h1>

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
                                <FormInput
                                    className="login__form-input"
                                    type="password"
                                    name="password"
                                    placeholder="Senha"
                                    autoComplete="current-password"
                                    aria-label="senha"
                                    required
                                    onChange={this.handleChange} />
                                <Link to='' className="login__form-link">
                                    Esqueci minha senha
                                </Link>
                                <FormButton
                                    className="login__form-button"
                                    disabled={this.state.isInvalid}>
                                    Entrar
                                </FormButton>
                                <FormButton
                                    className="login__form-button"
                                    outline>
                                    Cadastrar
                                </FormButton>
                            </Form>
                        </div>
                    </main>
                )
        )
    }

}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    logaUser: (event, user) => {
        event.preventDefault()
        dispatch(logaUser(user))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)