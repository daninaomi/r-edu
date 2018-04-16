import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { alteraUser, selecionarUserType, cadastraUser, listaEscolas } from '../../../actions'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Form from '../../compSimples/form'
import FormInput from '../../compSimples/form/formInput'
import FormInputMask from '../../compSimples/form/formInputMask'
import FormButton from '../../compSimples/form/formButton'
import Select from '../../compSimples/form/select'
import './perfil.css'


class PerfilProf extends React.Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this._onFocus = this._onFocus.bind(this)
        this.user = JSON.parse(localStorage.getItem('usuario')) || {};

        this.state = {
            isInvalid: false,
            nome: this.user.usuario.nome,
            sobrenome: this.user.usuario.sobrenome,
            email: this.user.usuario.email,
            senha: this.user.usuario.senha,

            sexo: '',
            cpf: this.user.usuario.professor.cpf, //{this.props.professor.cpf},
            estado: this.user.usuario.professor.estado, //{this.props.professor.estado},
            cidade: this.user.usuario.professor.cidade, //{this.props.professor.cidade},
            telefone: this.user.usuario.professor.telefone,// {this.props.professor.telefone},
            dataNascimento: this.user.usuario.professor.dataNascimento,// {this.props.professor.dataNascimento},
            idEscola: this.user.usuario.professor.idEscola //{this.props.professor.idEscola}

        }

    }

    componentDidMount() {
        this.props.dispatchListaEscolas()
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
            // prof
            const user = {
                usuario: {
                    nome: this.nome,
                    sobrenome: this.sobrenome,
                    email: this.email,
                    senha: this.senha,
                    tipoUsuario: 1
                },
                sexo: this.sexo,
                cidade: this.cidade,
                estado: this.estado,
                telefone: this.telefone,
                dataNascimento: this.dataNascimento,
                cpf: this.cpf,
                idEscola: 1

            }
            this.props.alteraUser(user)

            this.props.history.push('/homeProf')
        }
    }


    render() {

        const { user } = this.props

        return (

            <React.Fragment>
                <header className="perfil__header">
                    <div className="perfil__banner">
                        <h2 className="perfil__title perfil__title--nome">
                            {this.state.nome}
                        </h2>
                        <h2 className="perfil__title perfil__title--sobrenome">
                            {this.state.sobrenome}
                        </h2>
                    </div>
                    <h1 className="perfil__subtitle">PROFESSOR</h1>
                </header>

                <Main >
                    <ContainerBox className="perfil__container">
                        <Form className="perfil__form" onSubmit={this.handleSubmit}>

                            <FormInput
                                className="cadastro__form-input"
                                type="text"
                                name="nome"
                                id="nome"
                                placeholder="Nome"
                                value={this.state.nome}
                                onChange={this.handleChange}
                                required />

                            <FormInput
                                className="perfil__form-input"
                                type="text"
                                name="sobrenome"
                                id="sobrenome"
                                placeholder="Sobrenome"
                                value={this.state.sobrenome}
                                onChange={this.handleChange}
                                required />

                            <FormInput
                                className="perfil__form-input perfil__form-input--1"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="E-mail"
                                autoComplete="email"
                                aria-label="email"
                                required
                                value={this.state.email}
                                onChange={this.handleChange} />

                            <FormInput
                                className="perfil__form-input"
                                type="password"
                                name="senha"
                                placeholder="Senha"
                                id="senha"
                                autoComplete="current-password"
                                aria-label="senha"
                                required
                                value={this.state.senha}
                                onChange={this.handleChange} />
 
                            <FormInput
                                className="perfil__form-input"
                                type="password"
                                name="confirmeSenha"
                                placeholder="Confirme a senha"
                                autoComplete="current-password"
                                aria-label="senha"
                                required
                                value={this.state.confirmeSenha}
                                onChange={this.handleChange} />

                            <div className="perfil__container-radio">
                                <div className="perfil__form-radio">
                                    <FormInput
                                        className="perfil__form-input"
                                        type="radio"
                                        name="sexo"
                                        id="sexo-feminino"
                                        checked={(this.state.sexo === "feminino") ? true : false}
                                        onChange={this.handleChange}
                                        required />
                                    <label
                                        htmlFor="sexo-feminino"
                                        className="perfil__form-radio-label">
                                        Feminino
                                    </label>
                                </div>

                                <div className="perfil__form-radio">
                                    <FormInput
                                        className="perfil__form-input"
                                        type="radio"
                                        name="sexo"
                                        id="sexo-masculino"
                                        checked={(this.state.sexo === "masculino") ? true : false}
                                        onChange={this.handleChange}
                                        required />
                                    <label
                                        htmlFor="sexo-masculino"
                                        className="perfil__form-radio-label">
                                        Masculino
                                    </label>
                                </div>
                            </div>

                            <FormInputMask
                                className="perfil__form-input perfil__form-input--1"
                                type="text"
                                name="cpf"
                                mask="111.111.111-11"
                                size="14"
                                placeholder="CPF"
                                aria-label="cpf"
                                required
                                id="cpf"
                                value={this.state.cpf}
                                onChange={this.handleChange} />

                            <Select
                                className="perfil__form-select"
                                name="estado"
                                id="estado"
                                onChange={this.handleChange}
                                value={this.state.estado}
                                required>
                                <option value="" disabled selected>Estado</option>
                                <option value="estado1">SP</option>
                                <option value="estado2">RJ</option>
                                <option value="estado3">DF</option>
                            </Select>

                            <Select
                                className="perfil__form-select"
                                name="cidade"
                                id="cidade"
                                value={this.state.cidade}
                                onChange={this.handleChange}
                                required>
                                <option value="" disabled selected>Cidade</option>
                                <option value="cidade1">São Paulo</option>
                                <option value="cidade2">Rio de Janeiro</option>
                                <option value="cidade3">Brasília</option>
                            </Select>

                            <FormInputMask
                                className="form-input perfil__form-input"
                                type="text"
                                name="telefone"
                                id="telefone"
                                placeholder="Telefone"
                                aria-label="telefone"
                                mask="(11)11111-1111"
                                size="14"
                                required
                                value={this.state.telefone}
                                onChange={this.handleChange} />

                            <FormInput
                                className="perfil__form-input"
                                type="text"
                                name="dataNascimento"
                                id="dataNascimento"
                                placeholder="Data de Nascimento"
                                aria-label="dataNascimento"
                                required
                                value={this.state.dataNascimento}
                                onChange={this.handleChange}
                                onFocus={this._onFocus} />

                            <Select 
                                name="idEscola"
                                className="perfil__form-select perfil__form-input--1"
                                onChange={this.handleChange}
                                required >
                                {this.props.escolas.map(escola =>
                                    <option value={escola.id}>{escola.nome}</option>)};
                            </Select>

                            <FormButton
                                className="perfil__form-button"
                                type="submit"
                                disabled={this.state.isInvalid}>
                                Cadastrar
               </FormButton>
                        </Form>
                    </ContainerBox>
                </Main>

            </React.Fragment>

        )
    }
}


const mapStateToProps = state => ({
    user: state.user,
    escolas: Object.keys(state.escolas).map(key => {
        return state.escolas[key]
    })
})

const mapDispatchToProps = dispatch => ({
    alteraUser: (user) => {
        dispatch(alteraUser(user))
    },
    dispatchListaEscolas: () => {
        dispatch(listaEscolas())
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PerfilProf))
