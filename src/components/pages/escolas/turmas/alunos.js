import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { listaAlunos, listaTurmas } from '../../../../actions'
import Main from '../../../compSimples/main'
import ContainerBox from '../../../compSimples/container-box'
import Card from '../../../card'
import './turmas.css'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'


class TurmaAlunos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alunosFiltrados: [...props.alunos]
        }
        this.listaAlunos = [...props.alunos]
    }

    componentWillMount() {
        
    }

    componentDidMount() {
        this.props.dispatchListaTurmas()
        this.props.dispatchListaAlunos()
    }

    componentWillReceiveProps(nextProps) {
        this.listaAlunos = [...nextProps.alunos]
        this.setState({ alunosFiltrados: [...nextProps.alunos] })
    }

    render() {

        const { turma, alunos } = this.props

        return (
            <React.Fragment>
                <nav className="turmas__nav">
                {this.props.turma && 
                    <Link className="turmas__title" to={`/turmas/${this.props.turma.id}`}>
                        <h2>Desafios</h2>
                    </Link>
                }

                    <Link className="turmas__title turmas__title--active" to="#">
                        <h2>Alunos</h2>
                    </Link>
                    {/* <Link className="turmas__title" to={`/turma/${turmas.id}/grupos`}>
                    <h2>Grupos</h2> 
                    </Link>*/}
                </nav>

                <Main className="escolas__main">

                    <ContainerBox className="escolas__container">

                        {this.props.alunos && this.props.alunos.map((aluno) => (
                            <Card className="turmas__card-aluno">
                                <h2 className="turmas__card-aluno-title">
                                    {`${aluno.usuario.nome} ${aluno.usuario.sobrenome}`}
                                </h2>
                            </Card>
                        ))}

                    </ContainerBox>
                </Main>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => {

    const id = props.match.params.id
    const turma = state.turmas[id]

    return {
        turma,
        alunos: Object.keys(state.alunos).map(key => {
            return state.alunos[key]
        })
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchListaTurmas: () => {
        dispatch(listaTurmas())
    },
    dispatchListaAlunos: () => {
        dispatch(listaAlunos())
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TurmaAlunos))

