import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Card from '../../card'
import { pushPage, listaEscolas } from '../../../actions'
import './homeProf.css'


class HomeProf extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatchPushPage("Escolas")
        this.props.dispatchListaEscolas()
    }

    render() {

        return (
            <Main className="home__main">

                {/* <h1 className="home__title">Escolas</h1> */}

                {/* <h1 className="home__title">Olá {user.name} !</h1> */}
                <h1 className="home__title">Olá professor(a) {this.props.nome}!</h1>
                <h2 className="home__subtitle">Selecione sua escola</h2>

                <ContainerBox className="home__container">

                    {this.props.escolas.map(escola => (
                        <Link
                            className="home__card"
                            to={`/escolas/${escola.id}`}>
                            <Card >
                                <h2 className="home__card-title">
                                    {escola.nome}
                                </h2>
                            </Card>
                        </Link>
                    ))}

                </ContainerBox>
            </Main>
        )
    }
}


const mapStateToProps = state => ({
    nome: state.user.usuario ? state.user.usuario.nome : '',
    escolas: Object.keys(state.escolas).map(key => {
        return state.escolas[key]
    })
})

const mapDispatchToProps = dispatch => ({
    dispatchPushPage: page => {
        dispatch(pushPage(page))
    },
    dispatchListaEscolas: () => {
        dispatch(listaEscolas())
    }
})


export default withRouter(connect(mapStateToProps , mapDispatchToProps)(HomeProf))