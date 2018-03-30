import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { listaDesafios } from '../../../actions'
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
        this.props.dispatchListaDesafios()
    }

    render() {

        const { turma, desafios } = this.props

        const backgrounds = {
            'Foguete': bgFoguete,
            'Vulcão': bgVulcao,
            'Jardim': bgJardim,
            'Camera': bgCamera,
        }

        return (

            <Main className="escolas__main">

                <ContainerBox className="escolas__container">

                    {this.props.desafios && this.props.desafios.map(desafio => (

                        <Card className="home__card" style={{
                            backgroundImage: `url('${backgrounds[desafio.nome] || backgrounds['Foguete']}')`
                        }} >
                            <Link to={`/`} className="desafio-card">
                                <h2 className="turmas__card-title">
                                    {desafio.nome}
                                </h2>
                            </Link>
                        </Card>
                    ))}

                </ContainerBox>
            </Main>
        )
    }
}

const mapStateToProps = (state, props) => {

    const id = props.match.params.id
    const turma = state.turmas[id]
    const desafios = state.desafios

    return {
        turma,
        desafios: Object.keys(state.desafios).map(key => {
            return state.desafios[key]
        })
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchListaDesafios: () => {
        dispatch(listaDesafios())
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Desafios))

