import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Card from '../../card'
import { pushPage, pontuacao } from '../../../actions'
import './homeProf.css'
import bgFoguete from '../escolas/img/card-desafio-foguete.png'
import bgVulcao from '../escolas/img/card-desafio-vulcao.png'
import bgCamera from '../escolas/img/card-desafio-camera.png'
import bgJardim from '../escolas/img/card-desafio-jardim.png'


class HomeAluno extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillReceiveProps() {
        this.props.dispatchPushPage("Escolas")
    }

    componentDidMount() {
        // this.props.dispatchpontuacao(this.props.user)
    }

    render() {

        const backgrounds = {
            'Foguete': bgFoguete,
            'Vulcão': bgVulcao,
            'Jardim': bgJardim,
            'Camera': bgCamera
        }

        const { user, aulas, pontuacao } = this.props

        return (
            <Main className="home__main">
                {/* <ContainerBox> */}
                <h1 className="home__title">Olá {this.props.user.usuario.nome}!</h1>

                <div className="home__subtitle">
                    <h3>Você tem:</h3>
                    {/* <h2>23 pts</h2> */}
                    {/* <h2>{this.props.pontuacao} pts !</h2> */}
                </div>
                

                <ContainerBox className="home__container">

                    <Link
                        className="turmas__card"
                        to="#"
                        style={{ backgroundImage: `url('${backgrounds['Vulcão']}')` }}>
                        <Card>
                            <h2 className="turmas__card-title">
                                Vulcão
                            </h2>
                        </Card>
                    </Link>

                    <Link
                        className="turmas__card"
                        to="#"
                        style={{ backgroundImage: `url('${backgrounds['Foguete']}')` }}>
                        <Card>
                            <h2 className="turmas__card-title">
                                Foguete
                            </h2>
                        </Card>
                    </Link>

                </ContainerBox>
            </Main>
        )
    }
}


const mapStateToProps = (state, props) => {

    const user = state.user
    const pontuacao = state.pontuacao

    return {
        user,
        pontuacao
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchPushPage: page => {
        dispatch(pushPage(page))
    },
    // dispatchpontuacao: (user) => {
    //     dispatch(pontuacao(user))
    // }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeAluno))

