import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Card from '../../card'
import './homeProf.css'

function HomeProf(props) {

    return (
        <Main className="home__main">

            {/* <h1 className="home__title">Escolas</h1> */}

            {/* <h1 className="home__title">Olá {user.name} !</h1> */}
            <h1 className="home__title">Olá professor(a) !</h1>
            <h2 className="home__subtitle">Selecione sua escola</h2>

            <ContainerBox className="home__container">

                {props.escolas.map(escola => (
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


const mapStateToProps = state => ({
    escolas: Object.keys(state.escolas).map(key => {
        return state.escolas[key]
    })
})



export default withRouter(connect(mapStateToProps)(HomeProf))