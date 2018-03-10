import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { selecionarUserType, cadastraUser } from '../../../actions'
import Form from '../../form'
import FormInput from '../../form/formInput'
import FormButton from '../../form/formButton'
import Select from '../../form/select'
import './cadastro-prof.css'


class FormAluno extends React.Component {
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
                apelido: this.apelido,
                nome: this.nome,
                sobrenome: this.sobrenome,
                sexo: this.sexo,
                email: this.email,
                senha: this.senha,
                cidade: this.cidade,
                estado: this.estado,
                telefone: this.telefone,
                dataNascimento: this.dataNascimento,
                cpf: this.cpf
            }
            this.props.cadastraUser(event, user)

            this.props.history.push('/login')
        }
    }

    render() {

        const { user, cadastraUser, selecionarUserType, userType } = this.props

        return (

            <Form className="cadastro__form" onSubmit={this.handleSubmit}>
                <FormInput
                    className="cadastro-prof__form-input cadastro-prof__form-input--1"
                    type="text"
                    name="apelido"
                    placeholder="apelido"
                    onChange={this.handleChange}
                    required />
                <FormInput
                    className="cadastro-prof__form-input"
                    type="text"
                    name="nome"
                    placeholder="nome"
                    onChange={this.handleChange}
                    required />
                <FormInput
                    className="cadastro-prof__form-input"
                    type="text"
                    name="sobrenome"
                    placeholder="sobrenome"
                    onChange={this.handleChange}
                    required />

                <FormInput
                    className="cadastro-prof__form-input"
                    type="radio"
                    name="sexo"
                    id="sexo-feminino"
                    onChange={this.handleChange}
                    required />
                <label 
                    htmlFor="sexo-feminino"
                    className="cadastro-prof__form-radio-label"> 
                    Feminino 
                </label>
                <FormInput
                    className="cadastro-prof__form-input"
                    type="radio"
                    name="sexo"
                    id="sexo-masculino"
                    onChange={this.handleChange}
                    required />
                <label 
                    htmlFor="sexo-masculino"
                    className="cadastro-prof__form-radio-label"> 
                    Masculino 
                </label>

                <FormInput
                    className="cadastro-prof__form-input cadastro-prof__form-input--1"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    autoComplete="email"
                    aria-label="email"
                    required
                    onChange={this.handleChange} />
                <FormInput
                    className="cadastro-prof__form-input"
                    type="password"
                    name="password"
                    placeholder="Senha"
                    autoComplete="current-password"
                    aria-label="senha"
                    required
                    onChange={this.handleChange} />
                <FormInput
                    className="cadastro-prof__form-input"
                    type="password"
                    name="password"
                    placeholder="Confirme senha"
                    autoComplete="current-password"
                    aria-label="senha"
                    required
                    onChange={this.handleChange} />

                <Select name="cidade" className="cadastro__form-input cadastro-prof__form-select">
                    <option value="cidade1">Cidade</option>
                    <option value="cidade2">Cidade</option>
                    <option value="cidade3">Cidade</option>
                </Select>

                <Select name="estado" className="cadastro__form-input cadastro-prof__form-select">
                    <option value="estado1">Estado</option>
                    <option value="estado2">Estado</option>
                    <option value="estado3">Estado</option>
                </Select>

                <FormInput
                    className="cadastro-prof__form-input"
                    type="tel"
                    name="telefone"
                    placeholder="Telefone"
                    aria-label="telefone"
                    required
                    onChange={this.handleChange} />
                <FormInput
                    className="cadastro-prof__form-input"
                    type="date"
                    name="dataNascimento"
                    placeholder="Data de nascimento"
                    aria-label="dataNascimento"
                    required
                    onChange={this.handleChange} />
                <FormInput
                    className="cadastro-prof__form-input cadastro-prof__form-input--1"
                    type="number"
                    name="cpf"
                    placeholder="CPF"
                    aria-label="cpf"
                    required
                    onChange={this.handleChange} />

                <FormButton
                    className="cadastro-prof__form-button"
                    type="submit"
                    disabled={this.state.isInvalid}>
                    Cadastrar
                </FormButton>
            </Form>
        )
    }
}


const mapStateToProps = state => ({
    userType: state.user.type
})

const mapDispatchToProps = dispatch => ({
    cadastraUser: (user) => {
        dispatch(cadastraUser(user))
    }
})

withRouter(connect(mapDispatchToProps)(FormAluno))


export default connect(mapStateToProps, mapDispatchToProps)(FormAluno)
