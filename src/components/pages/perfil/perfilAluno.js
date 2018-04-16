import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { alteraUser, listaEscolas } from '../../../actions'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Form from '../../compSimples/form'
import FormInputMask from '../../compSimples/form/formInputMask'
import FormInput from '../../compSimples/form/formInput'
import FormButton from '../../compSimples/form/formButton'
import Select from '../../compSimples/form/select'
import './perfil.css'


class PerfilAluno extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this._onFocus = this._onFocus.bind(this)
        this.user = JSON.parse(localStorage.getItem('usuario')) || {};

        const date = new Date(this.user.usuario.aluno.dataNascimento);
        let dataNascimento = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        dataNascimento = dataNascimento.padStart(10, '0');
        this.state = {
            isInvalid: false,
            nome: this.user.usuario.nome,
            sobrenome: this.user.usuario.sobrenome,
            email: this.user.usuario.email,
            senha: this.user.usuario.senha,

            sexo: '',
            cpf: this.user.usuario.aluno.cpf, //{this.props.professor.cpf},
            estado: this.user.usuario.aluno.estado, //{this.props.professor.estado},
            cidade: this.user.usuario.aluno.cidade, //{this.props.professor.cidade},
            telefone: this.user.usuario.aluno.telefone,// {this.props.professor.telefone},
            dataNascimento: dataNascimento,// {this.props.professor.dataNascimento},
            idEscola: this.user.usuario.aluno.idEscola, //{this.props.professor.idEscola}
            nomeResponsavel: this.user.usuario.aluno.nomeResponsavel
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
            const user = {
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

            this.props.alteraUser(user)

            this.props.history.push('/homeAluno')
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
                    <h1 className="perfil__subtitle">ALUNO</h1>
                </header>

                <Main >
                    <ContainerBox className="perfil__container">
                        <Form className="perfil__form" onSubmit={this.handleSubmit}>

                            <FormInput
                                className="perfil__form-input"
                                type="text"
                                name="nome"
                                placeholder="Nome"
                                value={this.state.nome}
                                onChange={this.handleChange}
                                required />
                            <FormInput
                                className="perfil__form-input"
                                type="text"
                                name="sobrenome"
                                placeholder="Sobrenome"
                                value={this.state.sobrenome}
                                onChange={this.handleChange}
                                required />

                            <FormInput
                                className="perfil__form-input perfil__form-input--1"
                                type="email"
                                name="email"
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
                                className="perfil__form-input perfil__form-input--1"
                                type="text"
                                name="cpf"
                                mask="111.111.111-11"
                                size="14"
                                placeholder="CPF"
                                aria-label="cpf"
                                required
                                value={this.state.cpf}
                                onChange={this.handleChange} />
                            <Select
                                className="perfil__form-select"
                                name="estado"
                                value={this.state.estado}
                                onChange={this.handleChange}
                                required>
                                <option value="" disabled selected>Estado</option>
                                <option value="estado1">SP</option>
                                <option value="estado2">RJ</option>
                                <option value="estado3">DF</option>
                            </Select>
                            <Select
                                className="perfil__form-select"
                                name="cidade"
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
                                placeholder="Data de Nascimento"
                                aria-label="dataNascimento"
                                required
                                value={this.state.dataNascimento}
                                onChange={this.handleChange}
                                onFocus={this._onFocus} />

                            <FormInput
                                className="perfil__form-input"
                                type="text"
                                name="nomeResponsavel"
                                placeholder="Nome do Responsável"
                                value={this.state.nomeResponsavel}
                                onChange={this.handleChange}
                                required />

                            <Select name="idEscola"
                                className="perfil__form-select"
                                onChange={this.handleChange}
                                required >
                                {this.props.escolas.map(escola =>
                                    <option value={escola.id}>{escola.nome}</option>)};
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
    dispatchListaEscolas: () => {
        dispatch(listaEscolas())
    },
    alteraUser: (user) => {
        dispatch(alteraUser(user))
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PerfilAluno))
