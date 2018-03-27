import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Form from '../../compSimples/form'
import FormInput from '../../compSimples/form/formInput'
import FormButton from '../../compSimples/form/formButton'
import { cadastraTurmaAluno } from '../../../actions'
import './cadastro-turma.css'
import FaSearch from 'react-icons/lib/fa/search'


class AddAlunos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isInvalid: false,
            alunosFiltrados: [...props.alunos]
        }
        this.listaAlunos = [...props.alunos]
        this.onSearch = this.onSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    onSearch(name, value, isInvalid) {
        // pegar o valor do campo de pesquisa
        if (!isInvalid) {
            // percorrer a lista de alunos e verificar se tem alguem com nome ou email = valor de cima
            const alunosFiltrados = this.props.alunos.filter(aluno => {
                return aluno.nome.toLowerCase() === value.toLowerCase() || aluno.sobrenome.toLowerCase() === value.toLowerCase() || aluno.email.toLowerCase() === value.toLowerCase()
            })

            // setar no state a lista de alunos filtrados
            this.setState({ alunosFiltrados })
        } else {
            this.setState({ alunosFiltrados: this.props.alunos })
        }
    }

    handleChange(name, value, isInvalid) {
        this.listaAlunos[value].checked = !this.listaAlunos[value].checked
    }

    handleSubmit(event) {

        event.preventDefault()

        const alunos = this.listaAlunos.filter( aluno => aluno.checked)
        this.props.cadastraTurmaAluno(alunos, this.props.turma)

    }

    render() {

        const { alunos, cadastraAlunos } = this.props

        return (
            <Main>
                <ContainerBox >
                    <h1 className="cadastro__title">Adicione alunos</h1>

                    <Form className="cadastro-turma__form" onSubmit={this.handleSubmit}>

                        <FormInput
                            className="cadastro-turma__form-input"
                            type="text"
                            name="search-bar"
                            placeholder="Pesquise alunos por nome ou e-mail"
                            onChange={this.onSearch}
                        // required
                        />

                        {this.state.alunosFiltrados.map((aluno, index) => (

                            <label className="cadastro-turma__checkbox">
                                <FormInput
                                    className="cadastro-turma__checkbox-input"
                                    type="checkbox"
                                    name="search-bar"
                                    placeholder="Pesquise alunos por nome ou e-mail"
                                    onChange={this.handleChange}
                                    value={index}
                                />
                                <span class="cadastro-turma__checkbox-box"></span>
                                <div className="cadastro-turma__checkbox-names">
                                    {`${aluno.nome} ${aluno.sobrenome}`}
                                </div>
                            </label>
                        ))}

                        <FormButton
                            className="cadastro-turma__form-button"
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

const mapStateToProps = (state, props) => {

    const id = props.match.params.id
    const turma = state.turmas[id]

    return {
        turma,
        // alunos: Object.keys(state.alunos).map(key => {
        //     return state.alunos[key]
        // })
        alunos: state.alunos
    }
}

const mapDispatchToProps = dispatch => ({
    cadastraTurmaAluno: (alunos, escola) => {
        dispatch(cadastraTurmaAluno(alunos, escola))
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddAlunos))


// const mapStateToProps = (state, props) => {

//     const id = props.match.params.id
//     const turma = state.turma[id]
//     const alunos = turma.alunos

//     return {
//         // turma,
//         alunos: alunos.map(aluno => {
//             return state.alunos[aluno];
//         })
//     }
// }