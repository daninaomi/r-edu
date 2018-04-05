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
        this.props.dispatchListaTurmasAlunos()
        this.props.dispatchListaAlunos()
    }

    componentWillReceiveProps() {
        if (this.props.turma && this.props.turma.nome) {
            this.props.dispatchPushPage(this.props.turma.nome)
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
    const alunos = Object.keys(state.alunos).map(key => {
        return state.alunos[key]
    })
    const turmaAlunos = Object.keys(state.turmaAluno).map(key => {
        return state.turmaAluno[key]
    })
    {/* const alunoDoTurmaAlunos = Object.keys(state.turmaAluno.alunos).map(key => {
      return state.turmaAluno.alunos[key]
    }) */}

    {/* ALUNOS TEM Q VIR DE TURMAALUNO*/}

    return {
        turma,
        turmaAlunos,
        alunos: alunos.filter((aluno, turmaAlunos) => {
          console.log('id aluno de alunos', alunos.id)
            console.log('id aluno de turmaAlunos', turmaAlunos.idAluno)
            return turmaAlunos.idAluno === alunos.id
        })
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchPushPage: page => {
        dispatch(pushPage(page))
    },
    dispatchListaTurmas: () => {
        dispatch(listaTurmas())
    },
    dispatchListaTurmasAlunos: () => {
        dispatch(listaTurmasAlunos())
    },
    dispatchListaAlunos: () => {
        dispatch(listaAlunos())
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TurmaAlunos))

{/* <Link className="turmas__title" to={`/turma/${turmas.id}/grupos`}>
<h2>Grupos</h2>
</Link>*/}
