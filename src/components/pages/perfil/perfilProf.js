import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { alteraUser } from '../../../actions'
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
        this.state = { isInvalid: false,
        nome:"Leonardo",
        sobrenome:"Couceiro",
        email:"leo@leo.com.br",
        senha:"123123",
        confirmeSenha:"123123",
        sexo:"masculino",
        cpf:"34534534523",
        estado:"estado1",
        cidade:"cidade1",
        telefone:"11934343434",
        dataNascimento:"10/07/1985",
        idEscola:"escola1"
        }
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
                           value={this.state.confirmeSenha}
                           onChange={this.handleChange} />
                
                       <div className="perfil__container-radio">
                           <div className="perfil__form-radio">
                               <FormInput
                                   className="perfil__form-input"
                                   type="radio"
                                   name="sexo"
                                   id="sexo-feminino"  
                                   checked={(this.state.sexo==="feminino") ? true : false}                                                           
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
                                   checked={(this.state.sexo==="masculino") ? true : false}
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
                           value={this.state.cpf}
                           onChange={this.handleChange} />
                  

                       <Select
                           className="perfil__form-select"
                           name="estado"
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
                       <FormInputMask
                           className="perfil__form-input"
                           type="text"
                           name="dataNascimento"
                           placeholder="Data de Nascimento"
                           aria-label="dataNascimento"
                           mask="11/11/1111"                            
                           required
                           value={this.state.dataNascimento}
                           onChange={this.handleChange} />
                  
                       <Select
                           name="idEscola"
                           className="perfil__form-select perfil__form-input--1"
                           value={this.state.idEscola}
                           onChange={this.handleChange}>
                           <option value="" disabled selected>Escola</option>
                           <option value="escola1">Escola 1</option>
                           <option value="escola2">Escola 2</option>
                           <option value="escola3">Escola 3</option>
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
