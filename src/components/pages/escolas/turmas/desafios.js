import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Main from '../../../compSimples/main'
import ContainerBox from '../../../compSimples/container-box'
import Card from '../../../card'
import { listaDesafios, listaTurmas } from '../../../../actions'
import './turmas.css'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'


class TurmaDesafios extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatchListaTurmas()
        this.props.dispatchListaDesafios()
    }

    render() {

        const { turma, desafio, listaDesafios } = this.props

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

                        {this.props.desafios && this.props.desafios.map(desafio => (
                            <Link className="turmas__card" to={`/desafios/${this.props.desafios.id}`}>

                                <Card >
                                    <h2 className="turmas__card-title">
                                        {desafio.nome}
                                    </h2>
                                </Card>
                            </Link>
                        ))}

                        {this.props.turma &&
                        <Link className="turmas__card escolas__card-icon" to={`/turmas/${this.props.turma.id}/cadastro-desafios-1`}>
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
    const desafios = turma && turma.desafios || []

    return {
        turma,
        desafios: desafios.map(desafio => {
            return props.desafios[desafio];
        })
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchListaTurmas: () => {
        dispatch(listaTurmas())
    },
    dispatchListaDesafios: () => {
        dispatch(listaDesafios())
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

{/* <Card style={divStyle} > */}
