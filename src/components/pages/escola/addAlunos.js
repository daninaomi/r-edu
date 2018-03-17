import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Form from '../../compSimples/form'
import FormInput from '../../compSimples/form/formInput'
import FormButton from '../../compSimples/form/formButton'
import { cadastraSala, cadastraAlunos } from '../../../actions'
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
                escola: this.props.match.params.id,
                ano: this.ano,
                denominacao: this.denominacao
            }

            this.props.cadastraSala(sala)

            // this.props.history.push(`/escolas/${escola.id}`)
        }
    }

    handleSearch() {
        
    }

    render() {

        const { sala, cadastraSala, cadastraAlunos } = this.props

        return (
            <Main>
                <ContainerBox >
                    <h1 className="escolha__title">Adicione alunos:</h1>

                    <Form className="escolha__form" onSubmit={this.handleSearch}>

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

                            <FaSearch />

                        </FormButton>

                        {/* onsubmit do filtro pega lista de alunos e joga na store, pegar lista da store no mapStateToProps */}

                    </Form>

                    <Form className="escolha__form" onSubmit={this.handleSubmit}>

                    {/* criar if para mostrar só quando listaAlunos.lenght > 0 */}

                        <FormInput
                            className="cadastro__form-input cadastro__form-input--1"
                            type="checkbox"
                            name="search-bar"
                            placeholder="Pesquise alunos por nome ou e-mail"
                            onChange={this.handleChange}
                            required />

                        <FormButton
                            className="escolha__form-button"
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
    sala: state.sala
})

const mapDispatchToProps = dispatch => ({
    cadastraAlunos: (sala) => {
        dispatch(cadastraSala(sala))
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddAlunos))

// const mapStateToProps = state => ({
//     userType: state.userType
// })