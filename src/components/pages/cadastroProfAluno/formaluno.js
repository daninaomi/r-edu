import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { selecionarUserType, cadastraUser } from '../../../actions'
import Main from '../../main'
import ContainerBox from '../../container-box'
import Form from '../../form'
import FormInput from '../../form/formInput'
import FormButton from '../../form/formButton'
import Select from '../../form/select'
import './cadastro-prof-aluno.css'


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
                cpf: this.cpf,
                nomeResponsavel: this.nomeResponsavel,
                escola: this.escola
            }
            this.props.cadastraUser(event, user)

            this.props.history.push('/login')
        }
    }

    render() {


        const { user, cadastraUser, selecionarUserType, userType } = this.props

        return (

            <Main >
                <ContainerBox>
                    <h1 className="cadastro__title">Cadastro</h1>

                    <Form className="cadastro__form" onSubmit={this.handleSubmit}>
                        <FormInput
                            className="cadastro__form-input cadastro__form-input--1"
                            type="text"
                            name="apelido"
                            placeholder="apelido"
                            onChange={this.handleChange}
                            required />
                        <FormInput
                            className="cadastro__form-input"
                            type="text"
                            name="nome"
                            placeholder="nome"
                            onChange={this.handleChange}
                            required />
                        <FormInput
                            className="cadastro__form-input"
                            type="text"
                            name="sobrenome"
                            placeholder="sobrenome"
                            onChange={this.handleChange}
                            required />
                        <div className="cadastro__container-radio">
                            <div className="cadastro__form-radio">
                                <FormInput
                                    className="cadastro__form-radio-button"
                                    type="radio"
                                    name="sexo"
                                    id="sexo-feminino"
                                    value="professor"
                                    onChange={this.handleChange}
                                    required />
                                <label
                                    htmlFor="sexo-feminino"
                                    className="cadastro__form-radio-label">
                                    Feminino
                                </label>
                            </div>
                            <div className="cadastro__form-radio">
                                <FormInput
                                    className="cadastro__form-radio-button"
                                    type="radio"
                                    name="sexo"
                                    id="sexo-masculino"
                                    value="aluno"
                                    onChange={this.handleChange}
                                    required />
                                <label
                                    htmlFor="sexo-masculino"
                                    className="cadastro__form-radio-label">
                                    Masculino
                                </label>
                            </div>
                        </div>

                        <FormInput
                            className="cadastro__form-input cadastro__form-input--1"
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            autoComplete="email"
                            aria-label="email"
                            required
                            onChange={this.handleChange} />
                        <FormInput
                            className="cadastro__form-input"
                            type="password"
                            name="password"
                            placeholder="Senha"
                            autoComplete="current-password"
                            aria-label="senha"
                            required
                            onChange={this.handleChange} />
                        <FormInput
                            className="cadastro__form-input"
                            type="password"
                            name="password"
                            placeholder="Confirme senha"
                            autoComplete="current-password"
                            aria-label="senha"
                            required
                            onChange={this.handleChange} />

                        <Select name="cidade" className="cadastro__form-select">
                            <option value="cidade1">Cidade</option>
                            <option value="cidade2">Cidade</option>
                            <option value="cidade3">Cidade</option>
                        </Select>

                        <Select name="estado" className="cadastro__form-select">
                            <option value="estado1">Estado</option>
                            <option value="estado2">Estado</option>
                            <option value="estado3">Estado</option>
                        </Select>

                        <FormInput
                            className="cadastro__form-input"
                            type="tel"
                            name="telefone"
                            placeholder="Telefone"
                            aria-label="telefone"
                            required
                            onChange={this.handleChange} />
                        <FormInput
                            className="cadastro__form-input"
                            type="date"
                            name="dataNascimento"
                            placeholder="Data de nascimento"
                            aria-label="dataNascimento"
                            required
                            onChange={this.handleChange} />
                        <FormInput
                            className="cadastro__form-input"
                            type="number"
                            name="cpf"
                            placeholder="CPF"
                            aria-label="cpf"
                            
                            onChange={this.handleChange} />
                        <FormInput
                            className="cadastro__form-input"
                            type="text"
                            name="nomeResponsavel"
                            placeholder="Nome do Responsável"
                            onChange={this.handleChange}
                            required />
                        <Select name="escola" className="cadastro__form-select cadastro__form-input--1">
                            <option value="escola1">Escola</option>
                            <option value="escola2">Escola</option>
                            <option value="escola3">Escola</option>
                        </Select>

                        <FormButton
                            className="cadastro__form-button"
                            type="submit"
                            disabled={this.state.isInvalid}>
                            Cadastrar
                        </FormButton>
                    </Form>
                </ContainerBox>
            </Main>
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
