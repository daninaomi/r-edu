import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
// import { alteraUser } from '../../../actions'
import Main from '../../main'
import ContainerBox from '../../container-box'
import Form from '../../form'
import FormInput from '../../form/formInput'
import FormButton from '../../form/formButton'
import Select from '../../form/select'
import './perfil.css'
// import imgBack from './background.png'


class PerfilAluno extends React.Component {
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
            // this.props.alteraUser(event, user)

            // this.props.history.push('/homeAluno')
        }
    }

    // uncheckedRadio = ($) => {
    //     $('cadastro__form-radio-button').on("click", function (event) {
    //         $('cadastro__form-radio-button').prop('checked', false);
    //         $(this).prop('checked', true);
    //     });
    // }

    render() {


        // const { user, alteraUser } = this.props

        return (

            <React.Fragment>
                <header className="perfil__header">
                    <div className="perfil__banner">
                        <h1 className="perfil__title">Nome Sobrenome</h1>
                    </div>
                    <h2 className="perfil__subtitle">ALUNO</h2>
                </header>
                <Main >
                    <ContainerBox>
                        <Form className="perfil__form" onSubmit={this.handleSubmit}>
                            <FormInput
                                className="perfil__form-input perfil__form-input--1"
                                type="text"
                                name="apelido"
                                placeholder="apelido"
                                onChange={this.handleChange}
                                required />
                            <FormInput
                                className="perfil__form-input"
                                type="text"
                                name="nome"
                                placeholder="nome"
                                onChange={this.handleChange}
                                required />
                            <FormInput
                                className="perfil__form-input"
                                type="text"
                                name="sobrenome"
                                placeholder="sobrenome"
                                onChange={this.handleChange}
                                required />
                            <div className="perfil__container-radio">
                                <div className="perfil__form-radio">
                                    <FormInput
                                        className="perfil__form-radio-button"
                                        type="radio"
                                        name="sexo"
                                        id="sexo-feminino"
                                        value="professor"
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
                                        className="perfil__form-radio-button"
                                        type="radio"
                                        name="sexo"
                                        id="sexo-masculino"
                                        value="aluno"
                                        onChange={this.handleChange}
                                        required />
                                    <label
                                        htmlFor="sexo-masculino"
                                        className="perfil__form-radio-label">
                                        Masculino
                                </label>
                                </div>
                            </div>

                            <FormInput
                                className="perfil__form-input perfil__form-input--1"
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                autoComplete="email"
                                aria-label="email"
                                required
                                onChange={this.handleChange} />
                            <FormInput
                                className="perfil__form-input"
                                type="password"
                                name="password"
                                placeholder="Senha"
                                autoComplete="current-password"
                                aria-label="senha"
                                required
                                onChange={this.handleChange} />
                            <FormInput
                                className="perfil__form-input"
                                type="password"
                                name="password"
                                placeholder="Confirme senha"
                                autoComplete="current-password"
                                aria-label="senha"
                                required
                                onChange={this.handleChange} />

                            <Select name="cidade" className="perfil__form-select">
                                <option value="cidade1">Cidade</option>
                                <option value="cidade2">Cidade</option>
                                <option value="cidade3">Cidade</option>
                            </Select>

                            <Select name="estado" className="perfil__form-select">
                                <option value="estado1">Estado</option>
                                <option value="estado2">Estado</option>
                                <option value="estado3">Estado</option>
                            </Select>

                            <FormInput
                                className="perfil__form-input"
                                type="tel"
                                name="telefone"
                                placeholder="Telefone"
                                aria-label="telefone"
                                required
                                onChange={this.handleChange} />
                            <FormInput
                                className="perfil__form-input"
                                type="date"
                                name="dataNascimento"
                                placeholder="Data de nascimento"
                                aria-label="dataNascimento"
                                required
                                onChange={this.handleChange} />
                            <FormInput
                                className="perfil__form-input"
                                type="number"
                                name="cpf"
                                placeholder="CPF"
                                aria-label="cpf"
                                onChange={this.handleChange} />
                            <FormInput
                                className="perfil__form-input"
                                type="text"
                                name="nomeResponsavel"
                                placeholder="Nome do Responsável"
                                onChange={this.handleChange}
                                required />
                            <Select name="escola" className="perfil__form-select perfil__form-input--1">
                                <option value="escola1">Escola</option>
                                <option value="escola2">Escola</option>
                                <option value="escola3">Escola</option>
                            </Select>

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

export default PerfilAluno


// const mapStateToProps = state => ({
//     userType: state.user.type
// })

// const mapDispatchToProps = dispatch => ({
//     alteraUser: (user) => {
//         dispatch(alteraUser(user))
//     }
// })

// withRouter(connect(mapDispatchToProps)(PerfilAluno))


// export default connect(mapStateToProps, mapDispatchToProps)(PerfilAluno)
