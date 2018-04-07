import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Toggle from 'react-toggle'
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
import './aulas.css'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'
import bgFoguete from '../../img/card-desafio-foguete.png'
import bgVulcao from '../../img/card-desafio-vulcao.png'
import bgCamera from '../../img/card-desafio-camera.png'
import bgJardim from '../../img/card-desafio-jardim.png'
import IconLock from 'react-icons/lib/fa/lock'
import IconUnlock from 'react-icons/lib/fa/unlock-alt'


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

                {this.props.aula &&
                    <div className="aula-header" style={{
                        backgroundImage: `url('${backgrounds[this.props.aula.desafio.nome] || backgrounds['Foguete']}')`
                    }}>
                        <h1 className="aula-header-title">{this.props.aula.desafio.nome}</h1>
                    </div>
                }
                <nav className="turmas__nav">

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
                            <Card className="disciplina-form__item fases-card"
                                style={{
                                    background: `${bgColor[this.props.aula.disciplina.nome] || bgColor['Matemática']}`
                                }}>

                                <div className="disciplinas__card-title">
                                    <h2>{this.props.aula.disciplina.nome}</h2>
                                </div>

                                <div className="fases-card-item">
                                    <h4>1ª fase</h4>
                                    {/* <label>
                                        <Toggle
                                            className='custom-classname'
                                            defaultChecked={this.state.soupIsReady}
                                            icons={{
                                                checked: <IconUnlock />,
                                                unchecked: <IconLock />,
                                            }}
                                            onChange={this.handleSoupChange} />
                                        <span>Custom icons</span>
                                    </label> */}
                                </div>

                                <div className="fases-card-item">
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
