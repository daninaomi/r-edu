import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import {
    pushPage,
    listaAlunos,
    listaTurmas,
    listaTurmasAlunos
} from '../../../../actions'
import Main from '../../../compSimples/main'
import ContainerBox from '../../../compSimples/container-box'
import Card from '../../../card'
import './turmas.css'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'


class TurmaAlunos extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     alunosFiltrados: [...props.alunos]
        // }
        // this.listaAlunos = [...props.alunos]
    }

    componentDidMount() {
        this.props.dispatchListaTurmas()
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.turma && nextProps.turma.nome) {
            this.props.dispatchPushPage(nextProps.turma.nome)
        }

        if (nextProps.turma && nextProps.turma.nome && !nextProps.turmaAluno) {
            this.props.dispatchListaTurmasAlunos(nextProps.turma)
        }
    }

    render() {

        const { turma, alunos } = this.props

        return (
            <React.Fragment>
                <nav className="turmas__nav">

                    <div className="turmas__title">
                        <h2>Desafios</h2>
                        {this.props.turma &&
                            <Link className="turmas__title" to={`/turmas/${this.props.turma.id}`}></Link>
                        }
                    </div>

                    <Link className="turmas__title turmas__title--active" to="#">
                        <h2>Alunos</h2>
                    </Link>

                </nav>

                <Main className="escolas__main">

                    <ContainerBox className="escolas__container">

                        {this.props.turmaAluno && this.props.turmaAluno.alunos.map((aluno) => (
                            <Card className="turmas__card-aluno">
                                <h2 className="turmas__card-aluno-title">
                                    {`${aluno.nomeAluno} ${aluno.sobrenomeAluno}`}
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

    const turmaAluno = state.turmaAluno[id]
    const alunos = state.turmaAluno.alunos

    return {
        turma,
        turmaAluno 

    }
}

const mapDispatchToProps = dispatch => ({
    dispatchPushPage: page => {
        dispatch(pushPage(page))
    },
    dispatchListaTurmas: () => {
        dispatch(listaTurmas())
    },
    dispatchListaTurmasAlunos: turma => {
        dispatch(listaTurmasAlunos(turma))
    }
    // ,
    // dispatchListaAlunos: () => {
    //     dispatch(listaAlunos())
    // }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TurmaAlunos))

{/* <Link className="turmas__title" to={`/turma/${turmas.id}/grupos`}>
<h2>Grupos</h2>
</Link>*/}
