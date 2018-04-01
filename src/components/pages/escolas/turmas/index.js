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
    listaDesafios,
    listaTurmasDesafios
} from '../../../../actions'
import './turmas.css'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'
import bgFoguete from '../img/card-desafio-foguete.png'
import bgVulcao from '../img/card-desafio-vulcao.png'
import bgCamera from '../img/card-desafio-camera.png'
import bgJardim from '../img/card-desafio-jardim.png'


class TurmaDesafios extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatchListaAulas()
        this.props.dispatchListaTurmas()
        this.props.dispatchListaDesafios()
        this.props.dispatchlistaTurmasDesafios()
        this.props.dispatchPushPage(this.props.turma.nome)
    }

    render() {

        const backgrounds = {
            'Foguete': bgFoguete,
            'Vulcão': bgVulcao,
            'Jardim': bgJardim,
            'Camera': bgCamera,
        }

        const { turma, desafio, aulas } = this.props

        console.log(`aulas`, aulas)

        return (
            <React.Fragment>
                <nav className="turmas__nav">
                    <Link className="turmas__title turmas__title--active" to='#'>
                        <h2>Desafios</h2>
                    </Link>

                    {this.props.turma &&
                        <Link className="turmas__title" to={`/turmas/${this.props.turma.id}/alunos`}>
                            <h2>Alunos</h2>
                        </Link>
                    }
                    {/* <Link className="turmas__title" to={`/turma/${turmas.id}/grupos`}>
                    <h2>Grupos</h2>
                    </Link>*/}
                </nav>

                <Main className="escolas__main">

                    <ContainerBox className="escolas__container">

                        {this.props.aulas && this.props.desafio && this.props.aulas.map(aula => (
                            <Link className="turmas__card" to={`/aulas/${this.props.aulas.id}`}>
                                <Card style={{
                                    backgroundImage: `url('${backgrounds[this.props.desafio.nome] || backgrounds['Foguete']}')`
                                }}>
                                    <h2 className="turmas__card-title">
                                        {aula.desafio.nome}
                                    </h2>
                                </Card>
                            </Link>
                        ))}

                        {this.props.turma &&
                            <Link className="turmas__card escolas__card-icon" to={`/turmas/${this.props.turma.id}/cadastro-desafios`}>
                                <Card>
                                    <FaPlusCircle className="escolas__icon" />
                                </Card>
                            </Link>
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
    const desafio = state.desafio
    const aulas = turma && turma.aulas || []

    return {
        turma,
        desafio,
        aulas: Object.keys(state.aulas).map(key => {
            return state.aulas[key]
        })
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchPushPage: page => {
        dispatch(pushPage(page))
    },
    dispatchlistaTurmasDesafios: () => {
        dispatch(listaTurmasDesafios())
    },
    dispatchListaTurmas: () => {
        dispatch(listaTurmas())
    },
    dispatchListaDesafios: () => {
        dispatch(listaDesafios())
    },
    dispatchListaAulas: () => {
        dispatch(listaAulas())
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TurmaDesafios))


// import bgFoguete from '../img/card-desafio-foguete.png'
// import bgVulcao from '../img/card-desafio-vulcao.png'
// import bgCamera from '../img/card-desafio-camera.png'
// import bgJardim from '../img/card-desafio-jardim.png'

// //SWITCH CASE
// let imgUrl = this.props.nome

// switch (imgUrl) {
//   case 'Foguete':
//     // imgUrl = 'Foguete'
//     return bgFoguete
//     break;
//   case 'Vulcao':
//       // imgUrl = 'Vulcao'
//       return bgVulcao
//       break;
//   case 'Jardim':
//       // imgUrl = 'Jardim'
//       return bgJardim
//       break;
//   case 'Camera':
//       // imgUrl = 'Camera'
//       return bgCamera
//       break;
//   default: bgFoguete
// }

// const divStyle = {
//     backgroundImage: `url(' + ${this.imgUrl} + ')';`
// }

{/* <Card style={divStyle} > */ }
