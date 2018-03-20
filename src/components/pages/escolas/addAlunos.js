import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Form from '../../compSimples/form'
import FormInput from '../../compSimples/form/formInput'
import FormButton from '../../compSimples/form/formButton'
import { cadastraAlunos } from '../../../actions'
// import './escolha.css'
import FaSearch from 'react-icons/lib/fa/search'


class AddAlunos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isInvalid: false,
            alunosFiltrados: [...props.alunos]
        }
        this.onSearch = this.onSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    onSearch(name, value, isInvalid) {
        // pegar o valor do campo de pesquisa
        if (!isInvalid) {
            // percorrer a lista de alunos e verificar se tem alguem com nome ou email = valor de cima
            const alunosFiltrados = this.props.alunos.filter(aluno => {
                return aluno.nome.toLowerCase() === value.toLowerCase() || aluno.sobrenome.toLowerCase() === value.toLowerCase() || aluno.cpf.toLowerCase() === value.toLowerCase()
            })

            // setar no state a lista de alunos filtrados
            this.setState({ alunosFiltrados })
        } else {
            this.setState({alunosFiltrados: this.props.alunos})
        }
    }

    handleChange(name, value, isInvalid) {
        this[name] = value;
        this.setState({ isInvalid })
    }

    handleSubmit(event) {

        event.preventDefault()
        const escola = this.state.escola

        if (!this.state.isInvalid) {
            const alunos = {
                nome: this.nome,
                sobrenome: this.sobrenome,
                cpf: this.cpf
            }

            const turma = {
                escola: {
                    id: this.props.match.params.id
                },
                sala: {
                    id: this.sala
                }
            }
            this.props.cadastraAlunos(alunos, turma)
        }
    }

    render() {

        const { alunos, cadastraAlunos } = this.props
        
        return (
            <Main>
                <ContainerBox >
                    <h1 className="escolha__title">Adicione alunos:</h1>

                    <Form className="escolha__form" onSubmit={this.handleSubmit}>

                        <FormInput
                            className="cadastro__form-input cadastro__form-input--1"
                            type="text"
                            name="search-bar"
                            placeholder="Pesquise alunos por nome ou e-mail"
                            onChange={this.onSearch}
                            // required
                        />

                        {this.state.alunosFiltrados.map(aluno => (

                            <label>
                                <FormInput
                                    className="cadastro__form-input cadastro__form-input--1"
                                    type="checkbox"
                                    name="search-bar"
                                    placeholder="Pesquise alunos por nome ou e-mail"
                                    onChange={this.handleChange}
                                    // value={this.state.filtroAlunos}
                                    
                                /> {`${aluno.nome} ${aluno.sobrenome}`}
                            </label>
                        ))}

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

const mapStateToProps = (state, props) => {

    // const id = props.match.params.id
    // const escola = state.escolas[id]

    return {
        // escola,
        alunos: Object.keys(state.alunos).map(key => {
            return state.alunos[key]
        })
    }
}

const mapDispatchToProps = dispatch => ({
    cadastraAlunos: (alunos, escola) => {
        dispatch(cadastraAlunos(alunos, escola))
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