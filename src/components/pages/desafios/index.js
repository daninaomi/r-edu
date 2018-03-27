import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { addDesafio, pushPage } from '../../../actions'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Card from '../../card'
import bgFoguete from '../escolas/img/card-desafio-foguete.png'
import bgVulcao from '../escolas/img/card-desafio-vulcao.png'
import bgCamera from '../escolas/img/card-desafio-camera.png'
import bgJardim from '../escolas/img/card-desafio-jardim.png'


class Desafios extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatchPushPage(this.props.turma.nome)
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

                    </ContainerBox>
                </Main>
        )
    }
}

const mapStateToProps = (state, props) => {

    const id = props.match.params.id
    const turma = state.turmas[id]
    const desafios = desafios

    return {
        turma,
        desafios: desafios.map(desafio => {
            return state.desafios[desafio];
        })
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchPushPage: page => {
        dispatch(pushPage(page))
    }
    
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Desafios))

