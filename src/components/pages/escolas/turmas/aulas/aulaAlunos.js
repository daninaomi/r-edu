import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Main from '../../../../compSimples/main'
import ContainerBox from '../../../../compSimples/container-box'
import Card from '../../../../card'
import {
    pushPage,
    listaAulas,
    listaTurmas,
    // listaDesafios,
    // listaAlunos,
    // listaDisciplinas
    listaTurmasAlunos
} from '../../../../../actions'
import './aulas.css'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'
import bgFoguete from '../../img/card-desafio-foguete.png'
import bgVulcao from '../../img/card-desafio-vulcao.png'
import bgCamera from '../../img/card-desafio-camera.png'
import bgJardim from '../../img/card-desafio-jardim.png'


class AulaAlunos extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatchListaAulas()
        this.props.dispatchListaTurmas()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.aulas && nextProps.aulas.desafio.nome) {
            this.props.dispatchPushPage(nextProps.aulas.desafio.nome)
        }
        if (nextProps.turma && nextProps.turma.nome && !nextProps.turmaAluno) {
            this.props.dispatchListaTurmasAlunos(nextProps.turma)
        }
        if (nextProps.turma && nextProps.turma.nome && !nextProps.aula) {
            this.props.dispatchListaAulas(nextProps.aulas)
        }
    }

    render() {

        const backgrounds = {
            'Foguete': bgFoguete,
            'Vulcão': bgVulcao,
            'Jardim': bgJardim,
            'Camera': bgCamera,
        }

        const { turma, aula, alunos } = this.props

            // console.log('aula', aula)

        return (
            <React.Fragment>
              {this.props.aula &&
                <div className="aula-header" style={{
                    backgroundImage: `url('${backgrounds[this.props.aula.desafio.nome] || backgrounds['Foguete']}')`
                  }}>
                  <h1 className="aula-header-title">{this.props.aula.desafio.nome}</h1>
                </div>
              }

                <nav className="turmas__nav">

                    {this.props.aula &&
                        <Link className="turmas__title" to={`/turmas/${this.props.aula.idTurma}/aula/${this.props.aula.id}`}>
                          <h2>Fases</h2>
                        </Link>
                    }

                    <div className="turmas__title turmas__title--active">
                        <h2>Alunos</h2>
                            <Link to='#'></Link>
                    </div>
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

    const idAula = props.match.params.idAula
    const aula = state.aulas[idAula]
    // const aula = state.aulas.filter(aula => {
    //     return state.aulas.id == idAula
    // })

    // const aula = state.aulas.id == idAula ? (state.aulas) : (null)


    return {
        turma,
        turmaAluno,
        aula
        // aula: Object.keys(state.aula).map(key => {
        //     return state.aula[key]
        // })
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchPushPage: page => {
        dispatch(pushPage(page))
    },
    dispatchListaAulas: () => {
        dispatch(listaAulas())
    },
    dispatchListaTurmas: () => {
        dispatch(listaTurmas())
    },
    // dispatchListaDesafios: () => {
    //     dispatch(listaDesafios())
    // },
    // dispatchListaAlunos: () => {
    //     dispatch(listaAlunos())
    // },
    // dispatchListaDisciplinas: () => {
    //     dispatch(listaDisciplinas())
    // },
    dispatchListaTurmasAlunos: turma => {
        dispatch(listaTurmasAlunos(turma))
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AulaAlunos))
