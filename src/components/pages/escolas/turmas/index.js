import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Main from '../../../compSimples/main'
import ContainerBox from '../../../compSimples/container-box'
import Card from '../../../card'
import {
    pushPage,
    listaAulas,
    listaTurmas,
    listaDesafios
} from '../../../../actions'
import './turmas.css'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'
import bgFoguete from '../img/card-desafio-foguete.png'
import bgVulcao from '../img/card-desafio-vulcao.png'
import bgCamera from '../img/card-desafio-camera.png'
import bgJardim from '../img/card-desafio-jardim.png'


class Turma extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.aulas.length > 0 && nextProps.aulas[0].turma.nome) {
    //         this.props.dispatchPushPage(nextProps.aulas[0].turma.nome)
    //     }
    // }
    componentWillReceiveProps(nextProps) {
        if (nextProps.turma && nextProps.turma.nome) {
            this.props.dispatchPushPage(nextProps.turma.nome)
        }
    }

    componentDidMount() {
        this.props.dispatchListaAulas()
        this.props.dispatchListaTurmas()
        // this.props.dispatchListaDesafios()
    }

    render() {

        const backgrounds = {
            'Foguete': bgFoguete,
            'Vulcão': bgVulcao,
            'Jardim': bgJardim,
            'Camera': bgCamera
        }

        const { desafio, aulas, turma } = this.props
        console.log('turma', turma)

        return (
            <React.Fragment>
                <nav className="turmas__nav">

                    <Link className="turmas__title turmas__title--active" to='#'>
                        <h2>Desafios</h2>
                    </Link>

                    {/* <div > */}
                    {this.props.turma &&
                        <Link className="turmas__title" to={`/turmas/${this.props.turma.id}/alunos`}>
                            <h2>Alunos</h2>
                        </Link>
                    }
                    {/* </div> */}

                </nav>

                <Main className="escolas__main">

                    <ContainerBox className="escolas__container">

                        {this.props.aulas.length > 0 && this.props.aulas.map(aula => (
                            <Link
                                className="turmas__card"
                                to={`/turmas/${aula.idTurma}/aula/${aula.id}`}
                                style={{
                                    backgroundImage: `url('${backgrounds[aula.desafio.nome] || backgrounds['Foguete']}')`
                                }}>
                                <Card>
                                    <h2 className="turmas__card-title">
                                        {aula.desafio.nome}
                                    </h2>
                                </Card>
                            </Link>
                        ))}

                        {this.props.turma &&
                            // <Card>
                                <Link  className="turmas__card escolas__card-icon" to={`/turmas/${this.props.turma.id}/cadastro-desafios`}>
                                    <FaPlusCircle className="escolas__icon" />
                                </Link>
                            // </Card>
                        }

                    </ContainerBox>
                </Main>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => {

    const id = props.match.params.id
    const turma = state.turmas[id]
    const aulas = Object.keys(state.aulas).map(key => {
        return state.aulas[key]
    })

    return {
        turma,
        aulas: aulas.filter(aulas => {
            return aulas.idTurma == id
        })
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
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Turma))


{/* <Link className="turmas__title" to={`/turma/${turmas.id}/grupos`}>
<h2>Grupos</h2>
</Link>*/}
