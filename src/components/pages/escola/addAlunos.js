import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Form from '../../compSimples/form'
import FormInput from '../../compSimples/form/formInput'
import FormButton from '../../compSimples/form/formButton'
import { addSala, cadastraSala } from '../../../actions'
// import './escolha.css'
import FaSearch from 'react-icons/lib/fa/search'


class AddAlunos extends React.Component {
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
            const sala = {
                // escola: this.escola,
                ano: this.ano,
                denominacao: this.denominacao
            }

            this.props.cadastraSala(sala)

            // this.props.history.push(`/escolas/${escola.id}`)
        }
    }

    render() {

        const { sala, addSala, cadastraSala } = this.props

        return (
            <Main>
                <ContainerBox >
                    <h1 className="escolha__title">Sala Nova:</h1>
                    <Form className="escolha__form" onSubmit={this.handleSubmit}>

                        <FormInput
                            className="cadastro__form-input cadastro__form-input--1"
                            type="text"
                            name="search-bar"
                            placeholder="Pesquise alunos por nome ou e-mail"
                            onChange={this.handleChange}
                            required />
                        

                        <FormButton
                            className="escolha__form-button"
                            type="submit"
                            disabled={this.state.isInvalid}>

                            <FaSearch/>

                        </FormButton>

                    </Form>

                    <FormButton
                            className="escolha__form-button"
                            type="submit"
                            disabled={this.state.isInvalid}>
                            Cadastrar
                        </FormButton>
                </ContainerBox>
            </Main>
        )
    }
}

const mapStateToProps = state => ({
    sala: state.sala
})

const mapDispatchToProps = dispatch => ({
    cadastraSala: (sala) => {
        dispatch(cadastraSala(sala))
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddAlunos))

// const mapStateToProps = state => ({
//     userType: state.userType
// })