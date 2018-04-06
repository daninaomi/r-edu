import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { selecionarUserType, cadastraUser } from '../../../actions'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Form from '../../compSimples/form'
import FormInputMask from '../../compSimples/form/formInputMask'
import FormInput from '../../compSimples/form/formInput'
import FormButton from '../../compSimples/form/formButton'
import Select from '../../compSimples/form/select'
import './cadastro-prof-aluno.css'


class FormAluno extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this._onFocus = this._onFocus.bind(this)
    }


    handleChange(name, value, isInvalid) {
        this[name] = value;
        this.setState({ isInvalid })
    }

    _onFocus(e) {
        e.currentTarget.type = "date";
    }


    handleSubmit(event) {
        event.preventDefault()

        if (!this.state.isInvalid) {
            const user = {
                // aluno
                usuario: {
                    nome: this.nome,
                    sobrenome: this.sobrenome,
                    email: this.email,
                    senha: this.senha,
                    tipoUsuario: 2
                },
                sexo: this.sexo,
                cidade: this.cidade,
                estado: this.estado,
                telefone: this.telefone,
                dataNascimento: this.dataNascimento,
                cpf: this.cpf,
                nomeResponsavel: this.nomeResponsavel,
                idEscola: this.idEscola
            }
            this.props.cadastraUser(user)
            alert('Cadastro efetuado com sucesso!')

            this.props.history.push('/login')
        }
    }

    render() {

        const { user, cadastraUser, selecionarUserType } = this.props

        return (

            <Main >
                <ContainerBox>
                    <h1 className="cadastro__title">Cadastro</h1>

                    <Form className="cadastro__form" onSubmit={this.handleSubmit}>

                        <FormInput
                            className="cadastro__form-input"
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            onChange={this.handleChange}
                            required />
                        <FormInput
                            className="cadastro__form-input"
                            type="text"
                            name="sobrenome"
                            placeholder="Sobrenome"
                            onChange={this.handleChange}
                            required />

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
                            name="senha"
                            placeholder="Senha"
                            autoComplete="current-password"
                            aria-label="senha"
                            required
                            onChange={this.handleChange} />
                        <FormInput
                            className="cadastro__form-input"
                            type="password"
                            name="confirmeSenha"
                            placeholder="Confirme a senha"
                            autoComplete="current-password"
                            aria-label="senha"
                            required
                            onChange={this.handleChange} />

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
                        <FormInputMask
                            className="cadastro__form-input cadastro__form-input--1"
                            type="text"
                            name="cpf"
                            mask="111.111.111-11"
                            size="14"
                            placeholder="CPF"
                            aria-label="cpf"
                            required

                            onChange={this.handleChange} />
                        <Select
                            className="cadastro__form-select"
                            name="estado"
                            onChange={this.handleChange}
                            required>
                            <option value="" disabled selected>Estado</option>
                            <option value="estado1">SP</option>
                            <option value="estado2">RJ</option>
                            <option value="estado3">DF</option>
                        </Select>
                        <Select
                            className="cadastro__form-select"
                            name="cidade"
                            onChange={this.handleChange}
                            required>
                            <option value="" disabled selected>Cidade</option>
                            <option value="cidade1">São Paulo</option>
                            <option value="cidade2">Rio de Janeiro</option>
                            <option value="cidade3">Brasília</option>
                        </Select>


                        <FormInputMask
                            className="form-input cadastro__form-input"
                            type="text"
                            name="telefone"
                            placeholder="Telefone"
                            aria-label="telefone"
                            mask="(11)11111-1111"
                            size="14"
                            required
                            onChange={this.handleChange} />
                        <FormInputMask
                            className="cadastro__form-input"
                            type="text"
                            name="dataNascimento"
                            placeholder="Data de Nascimento"
                            aria-label="dataNascimento"
                            mask="11/11/1111"
                            required
                            onChange={this.handleChange} />

                        <FormInput
                            className="cadastro__form-input"
                            type="text"
                            name="nomeResponsavel"
                            placeholder="Nome do Responsável"
                            onChange={this.handleChange}
                            required />
                        <Select
                            name="idEscola"
                            className="cadastro__form-select cadastro__form-input--1"
                            onChange={this.handleChange}>
                            <option value="" disabled selected>Escola</option>
                            <option value="1">Escola 1</option>
                            <option value="2">Escola 2</option>
                            <option value="3">Escola 3</option>
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
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    cadastraUser: (user) => {
        dispatch(cadastraUser(user))
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormAluno))
