import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Main from '../../../compSimples/main'
import ContainerBox from '../../../compSimples/container-box'
import Card from '../../../card'
import { addDesafio } from '../../../../actions'
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

    render() {

        const { turma, desafio, addDesafio } = this.props

        var imgUrl = this.props.nome === 'Foguete' ?
            imgUrl = bgFoguete :
            this.props.nome === 'Vulcão' ?
                imgUrl = bgVulcao :
                this.props.nome === 'Vulcão' ?
                    imgUrl = bgVulcao :
                    this.props.nome === 'Camera' ?
                        imgUrl = bgCamera :
                        imgUrl = bgJardim

        var divStyle = {
            backgroundImage: `url(' + ${imgUrl} + ')';`,
            backgroundSize: `cover;`
        }

        return (
            <React.Fragment>
                <nav className="turmas__nav">
                    <Link className="turmas__title turmas__title--active" to='#'>
                        <h2>Desafios</h2>
                    </Link>

                    <Link className="turmas__title" to={`/turmas/${this.props.turma.id}/alunos`}>
                        <h2>Alunos</h2>
                    </Link>
                    {/* <Link className="turmas__title" to={`/turma/${turmas.id}/grupos`}>
                    <h2>Grupos</h2> 
                    </Link>*/}
                </nav>

                <Main className="escolas__main">

                    <ContainerBox className="escolas__container">

                        {this.props.desafios.map(desafio => (
                            <Link className="turmas__card" to={`/desafios/${this.props.desafios.id}`}>
                                <Card style={divStyle} >
                                    <h2 className="turmas__card-title">
                                        {desafio.nome}
                                    </h2>
                                </Card>
                            </Link>
                        ))}

                        <Link className="turmas__card escolas__card-icon" to={`/turma/${this.props.turma.id}/cadastro-desafios`}>
                            <Card>
                                <FaPlusCircle className="escolas__icon" />
                            </Card>
                        </Link>

                    </ContainerBox>
                </Main>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => {

    const id = props.match.params.id
    const turma = state.turmas[id]
    const desafios = turma.desafios

    return {
        turma,
        desafios: desafios.map(desafio => {
            return state.desafios[desafio];
        })
    }
}

export default withRouter(connect(mapStateToProps)(TurmaDesafios))

