import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Form from '../../compSimples/form'
import FormInput from '../../compSimples/form/formInput'
import FormButton from '../../compSimples/form/formButton'
import { selecionaUserType } from '../../../actions'
import './escolha.css'


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
                type: this.userType,
            }
            this.props.selecionaUserType(user)

            this.props.history.push('/cadastroProfAluno')
        }
    }

    render() {

        const { user, selecionaUserType } = this.props

        return (
            <Main>
                <ContainerBox >
                    <h1 className="escolha__title">Você é:</h1>
                    <Form className="escolha__form" onSubmit={this.handleSubmit}>
                        <div className="escolha__container">
                            <ul class="escolha-option">
                                <li class="escolha-option__item">
                                    <FormInput
                                        className="escolha-radio-btn"
                                        type="radio"
                                        name="userType"
                                        id="type-professor"
                                        value="professor"
                                        onChange={this.handleChange}
                                        required />
                                    <label
                                        className="escolha-radio-label"
                                        htmlFor="type-professor">
                                        Professor(a) </label>
                                </li>
                                <li class="escolha-option__item">
                                    <FormInput
                                        className="escolha-radio-btn"
                                        type="radio"
                                        name="userType"
                                        id="type-aluno"
                                        value="aluno"
                                        onChange={this.handleChange}
                                        required />
                                    <label
                                        className="escolha-radio-label"
                                        htmlFor="type-aluno">
                                        Aluno(a) </label>
                                </li>
                            </ul>
                            
                            <FormButton
                                className="escolha__form-button"
                                type="submit"
                                disabled={this.state.isInvalid}>
                                Continuar
                        </FormButton>
                        </div>

                    </Form>
                </ContainerBox>
            </Main>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    selecionaUserType: (userType) => {
        dispatch(selecionaUserType(userType))
    }
})


export default withRouter(connect(null, mapDispatchToProps)(Cadastro))

// const mapStateToProps = state => ({
//     userType: state.userType
// })