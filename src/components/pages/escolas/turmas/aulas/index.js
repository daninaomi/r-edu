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
    listaAlunos,
    listaDisciplinas
} from '../../../../../actions'
// import './turmas.css'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'
import bgFoguete from '../../img/card-desafio-foguete.png'
import bgVulcao from '../../img/card-desafio-vulcao.png'
import bgCamera from '../../img/card-desafio-camera.png'
import bgJardim from '../../img/card-desafio-jardim.png'


class AulaFases extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillReceiveProps() {
        if (this.props.aulas && this.props.aulas.desafio.nome) {
            this.props.dispatchPushPage(this.props.aulas.desafio.nome)
        }
    }

    componentDidMount() {
        this.props.dispatchListaAulas()
    }

    render() {

        const backgrounds = {
            'Foguete': bgFoguete,
            'Vulcão': bgVulcao,
            'Jardim': bgJardim,
            'Camera': bgCamera,
        }

        const bgColor = {
            'Matemática': '#9CCC65',
            'Português': '#FFB74D',
            'Física': '#82B1FF',
            'Química': '#FF8A80',
            'Filosofia': '#FFD42F',
            'Geografia': '#9CCC65',
            'História': '#FFB74D',
            'Biologia': '#82B1FF',
            'Educação Física': '#FF8A80',
            'Ciências': '#FFD42F'
        }

        const { aula } = this.props


        return (
            <React.Fragment>
                <nav className="turmas__nav">
                    {/* <div className="aula-header" style={{
                      width: '100%;',
                      {this.props.aula &&
                      backgroundImage: `url('${backgrounds[this.props.aula.desafio.nome] || backgrounds['Foguete']}')`]
                      }
                  }}>>
                  </div> */}

                    <Link className="turmas__title turmas__title--active" to='#'>
                        <h2>Fases</h2>
                    </Link>


                    {this.props.aula &&
                        <Link className="turmas__title" to={`/turmas/${this.props.aula.idTurma}/aula/${this.props.aula.id}/alunos`}>
                            <h2>Alunos</h2>
                        </Link>
                    }

                </nav>

                <Main className="escolas__main">

                    <ContainerBox className="escolas__container">

                        {this.props.aula &&
                            <Card className="disciplina-form__item disciplinas__card"
                                style={{
                                    background: `${bgColor[this.props.aula.disciplina.nome] || bgColor['Matemática']}`
                                }}>

                                <div className="disciplinas__card-title">
                                    <h2>{this.props.aula.disciplina.nome}</h2>
                                </div>

                                <div className="fases-card fases-card-title">
                                    <h4>1ª fase</h4>

                                </div>

                                <div className="fases-card fases-card-title">
                                    <h4>2ª fase</h4>

                                </div>

                            </Card>
                        }


                    </ContainerBox>
                </Main>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => {

    const idAula = props.match.params.idAula
    const aula = state.aulas[idAula]

    return {
        // turma,
        aula
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchPushPage: page => {
        dispatch(pushPage(page))
    },
    dispatchListaTurmas: () => {
        dispatch(listaTurmas())
    },
    // dispatchListaDesafios: () => {
    //     dispatch(listaDesafios())
    // },
    dispatchListaDisciplinas: () => {
        dispatch(listaDisciplinas())
    },
    dispatchListaAulas: () => {
        dispatch(listaAulas())
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AulaFases))
