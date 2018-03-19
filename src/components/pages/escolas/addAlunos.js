import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Form from '../../compSimples/form'
import FormInput from '../../compSimples/form/formInput'
import FormButton from '../../compSimples/form/formButton'
import { cadastraSala, cadastraAlunos, pegaListaAlunos, filtroAlunos } from '../../../actions'
// import './escolha.css'
import FaSearch from 'react-icons/lib/fa/search'


class AddAlunos extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: false }
        this.handleChangeSearch = this.handleChangeSearch.bind(this)
        this.onSearch = this.onSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeSearch(name, value, isInvalid) {
        this[name] = value;
        this.setState({ isInvalid })
    }

    onSearch(event) {
        // this.refs.filterTextInput.value
        event.preventDefault()

        if (!this.state.isInvalid) {
            const alunos = {
                escola: this.props.match.params.id,
                ano: this.ano,
                denominacao: this.denominacao,
                nome: this.nome,
                sobrenome: this.sobrenome,
                cpf: this.cpf
            }

            this.props.pegaListaAlunos(alunos)
        }
    }

    handleChange(name, value, isInvalid) {
        this[name] = value;
        this.setState({ isInvalid })

        // this.refs.alunosCadastrados.checked
    }

    handleSubmit(event) {
        event.preventDefault()

        if (!this.state.isInvalid) {
            const alunos = {
                escola: this.props.match.params.id,
                ano: this.ano,
                denominacao: this.denominacao
            }

            this.props.cadastraAlunos(alunos)

            // this.props.history.push(`/escolas/${escola.id}`)
        }
    }

    render() {

        const { sala, alunos, cadastraSala, cadastraAlunos } = this.props

        return (
            <Main>
                <ContainerBox >
                    <h1 className="escolha__title">Adicione alunos:</h1>

                    {/* onsubmit do filtro pega lista de alunos e joga na store, pegar lista da store no mapStateToProps */}
                    <Form className="escolha__form" onSubmit={this.onSearch}>
                        <FormInput
                            className="cadastro__form-input cadastro__form-input--1"
                            type="text"
                            name="search-bar"
                            placeholder="Pesquise alunos por nome ou e-mail"
                            onChange={this.handleChangeSearch}
                            // ref="filterTextInput"
                            required />

                        <FormButton
                            className="escolha__form-button"
                            type="submit"
                            disabled={this.state.isInvalid}>
                            <FaSearch />
                        </FormButton>
                    </Form>

                    {/* criar if para mostrar só quando listaAlunos.lenght > 0 */}

                    {/* {this.props.listaAlunos.lenght > 0} ? ( */}

                    <Form className="escolha__form" onSubmit={this.handleSubmit}>

                        {this.props.listaAlunos.map(aluno => (
                            
                            <FormInput
                                className="cadastro__form-input cadastro__form-input--1"
                                type="checkbox"
                                name="search-bar"
                                placeholder="Pesquise alunos por nome ou e-mail"
                                onChange={this.handleChange}
                                value={this.state.filtroAlunos}
                                // checked={this.props.alunosCadastrados}
                                required />
                        ))}

                        <FormButton
                            className="escolha__form-button"
                            type="submit"
                            disabled={this.state.isInvalid}>
                            Cadastrar
                        </FormButton>
                    </Form>

                    {/* ) */}

                </ContainerBox>
            </Main>
        )
    }
}

// const mapStateToProps = (state, props) => {

//     const id = props.match.params.id
//     const sala = state.sala[id]
//     const listaAlunos = sala.alunos

//     return {
//         // sala,
//         listaAlunos: listaAlunos.map(aluno => {
//             return state.listaAlunos[aluno];
//         })
//     }
// }

const mapStateToProps = state => ({

    listaAlunos: state.listaAlunos,
    filtraAlunos: state.filtraAlunos

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