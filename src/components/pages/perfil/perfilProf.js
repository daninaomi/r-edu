import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { alteraUser } from '../../../actions'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Form from '../../compSimples/form'
import FormInput from '../../compSimples/form/formInput'
import FormButton from '../../compSimples/form/formButton'
import Select from '../../compSimples/form/select'
import './perfil.css'


class PerfilProf extends React.Component {
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
            // this.props.alteraUser(event, user)

            // this.props.history.push('/homeProf')
        }
    }

    render() {

        const { user } = this.props

        return (

            <React.Fragment>
                <header className="perfil__header">
                    <div className="perfil__banner">
                        <h2 className="perfil__title perfil__title--nome">
                            {/* {user.nome} */} Nome
                        </h2>
                        <h2 className="perfil__title perfil__title--sobrenome">
                            {/* {user.sobrenome} */} Sobrenome
                        </h2>
                    </div>
                    <h1 className="perfil__subtitle">PROFESSOR</h1>
                </header>
                <Main >
                    <ContainerBox className="perfil__container">
                        <Form className="perfil__form" onSubmit={this.handleSubmit}>
                        <FormInput
                            className="cadastro__form-input cadastro__form-input--1"
                            type="text"
                            name="apelido"
                            placeholder="Username"
                            onChange={this.handleChange}
                            // value={user.apelido}
                            required />
                        <FormInput
                            className="cadastro__form-input"
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            onChange={this.handleChange}
                            // value={user.nome}
                            required />
                        <FormInput
                            className="cadastro__form-input"
                            type="text"
                            name="sobrenome"
                            placeholder="Sobrenome"
                            onChange={this.handleChange}
                            // value={user.sobrenome}
                            required />

                        <FormInput
                            className="cadastro__form-input cadastro__form-input--1"
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            autoComplete="email"
                            aria-label="email"
                            // value={user.email}
                            required
                            onChange={this.handleChange} />
                        <FormInput
                            className="cadastro__form-input"
                            type="password"
                            name="password"
                            placeholder="Senha"
                            autoComplete="current-password"
                            aria-label="senha"
                            // value={user.password}
                            required
                            onChange={this.handleChange} />
                        <FormInput
                            className="cadastro__form-input"
                            type="password"
                            name="password"
                            placeholder="Confirme senha"
                            autoComplete="current-password"
                            aria-label="senha"
                            // value={user.password}
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
                                    // value={user.sexo}
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
                                    // value={user.sexo}
                                    required />
                                <label
                                    htmlFor="sexo-masculino"
                                    className="cadastro__form-radio-label">
                                    Masculino
                                </label>
                            </div>
                        </div>

                        <Select
                            className="cadastro__form-select"
                            name="cidade"
                            // value={user.cidade}
                            required>
                            <option value="" disabled selected>Cidade</option>
                            <option value="cidade1">São Paulo</option>
                            <option value="cidade2">Rio de Janeiro</option>
                            <option value="cidade3">Brasília</option>
                        </Select>

                        <Select
                            className="cadastro__form-select"
                            name="estado"
                            // value={user.estado}
                            required>
                            <option value="" disabled selected>Estado</option>
                            <option value="estado1">SP</option>
                            <option value="estado2">RJ</option>
                            <option value="estado3">DF</option>
                        </Select>

                        <FormInput
                            className="cadastro__form-input"
                            type="number"
                            name="telefone"
                            placeholder="Telefone"
                            aria-label="telefone"
                            // value={user.telefone}
                            required
                            onChange={this.handleChange} />
                        <FormInput
                            className="cadastro__form-input"
                            type="text"
                            name="dataNascimento"
                            placeholder="Data de nascimento"
                            aria-label="dataNascimento"
                            onFocus={this._onFocus}
                            id="date"
                            // value={user.dataNascimento}
                            required
                            onChange={this.handleChange} />
                        <FormInput
                            className="cadastro__form-input"
                            name="cpf"
                            placeholder="CPF"
                            aria-label="cpf"
                            onChange={this.handleChange}
                            required 
                            // value={user.cpf}
                            />

                            <FormButton
                                className="perfil__form-button"
                                type="submit"
                                disabled={this.state.isInvalid}>
                                Salvar
                            </FormButton>
                        </Form>
                    </ContainerBox>
                </Main>
            </React.Fragment>
        )
    }
}


const mapStateToProps = state => ({
    userType: state.user.type
})

const mapDispatchToProps = dispatch => ({
    alteraUser: (user) => {
        dispatch(alteraUser(user))
    }
    // ,
    // dispatchListaTurmas: () => {
    //     dispatch(listaTurmas())
    // }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PerfilProf))
