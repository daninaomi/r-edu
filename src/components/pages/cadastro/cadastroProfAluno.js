import React from 'react'
import Main from '../../main'
import ContainerBox from '../../container-box'
import Form from '../../form'
import FormInput from '../../form/formInput'
import FormButton from '../../form/formButton'
import Select from '../../form/select'
import { selecionarUserType, cadastraUser } from '../../../actions'
import './cadastro.css'


class Cadastro extends React.Component {
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
                apelido,
                nome,
                sobrenome,
                sexo,
                email,
                senha,
                cidade,
                estado,
                telefone,
                dataNascimento,
                cpf
            }
            this.props.cadastraUser(event, user)

            this.props.history.push('/login')
        }
    }

    render() {

        const { user, selecionarUserType } = this.props
        // const { match, location, history } = this.props

        return (
            userType === 'Professor' ? (
                <FormProf />
            ) : (
                <FormAluno />
            )
            
        )
    }
}

const mapStateToProps = state => ({
    userType: state.userType
})

const mapDispatchToProps = dispatch => ({
    selecionarUserType: (userType) => {
        dispatch(selecionarUserType(userType))
    }
})

withRouter(connect(mapDispatchToProps)(FormButton))


export default connect(mapStateToProps, mapDispatchToProps)(Cadastro)

{/* <Main>
                <ContainerBox>
                    <h1 className="cadastro-prof__title">Cadastro</h1>
                    <Form className="cadastro-prof__form" onSubmit={this.handleSubmit}>
                        <FormInput
                            className="cadastro-prof__form-input"
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
                            value="professor"
                            onChange={this.handleChange}
                            required />
                        <label htmlFor="sexo-feminino"> Feminino </label>
                        <FormInput
                            className="cadastro-prof__form-input"
                            type="radio"
                            name="sexo"
                            id="sexo-masculino"
                            value="aluno"
                            onChange={this.handleChange}
                            required />
                        <label htmlFor="sexo-masculino"> Masculino </label>
                        <FormInput
                            className="cadastro__form-input"
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
                        <Select name="cidade">
                            <option value="cidade1">Cidade</option>
                            <option value="cidade2">Cidade</option>
                            <option value="cidade3">Cidade</option>
                        </Select>
                        <Select name="estado">
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
                            required
                            onChange={this.handleChange} />

                        <FormButton
                            className="cadastro-prof__form-button"
                            type="submit"
                            disabled={this.state.isInvalid}>
                            Continuar
                        </FormButton>
                    </Form>
                </ContainerBox>
            </Main> */}
