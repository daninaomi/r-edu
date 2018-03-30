import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Main from '../../../../compSimples/main'
import ContainerBox from '../../../../compSimples/container-box'
import Card from '../../../../card'
import { listaDesafios, listaTurmas } from '../../../../../actions'
import './desafio.css'
import bgFoguete from '../../img/card-desafio-foguete.png'
import bgVulcao from '../../img/card-desafio-vulcao.png'
import bgCamera from '../../img/card-desafio-camera.png'
import bgJardim from '../../img/card-desafio-jardim.png'


class AddDesafio extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: false }
    }

    componentDidMount() {
        this.props.dispatchListaTurmas()
        this.props.dispatchListaDesafios()
    }

    render() {
        const backgrounds = {
            'Foguete': bgFoguete,
            'Vulcão': bgVulcao,
            'Jardim': bgJardim,
            'Camera': bgCamera,
        }

        const { desafios } = this.props

        return (
            <Main className="escolas__main">
                <ContainerBox className="escolas__container">

                    <h1 className="home__title">Escolha um desafio</h1>

                    {this.props.desafios && this.props.turma && this.props.desafios.map(desafio => (

                        <Card className="home__card desafio-card" style={{
                            backgroundImage: `url('${backgrounds[desafio.nome] || backgrounds['Foguete']}')`
                        }} >
                        
                            <Link to={`/turmas/${this.props.turma.id}/cadastro-desafios-2`}>
                                <h2 className="home__card-title">{desafio.nome}</h2>
                            </Link>
                        
                        </Card>

                    ))}

                </ContainerBox>
            </Main>
        )
    }
}

const mapStateToProps = (state, props) => {
    
    const id = props.match.params.id // const id = 0
    const turma = state.turmas[id]
    
    return {
        turma,
        desafios: Object.keys(state.desafios).map(key => {
            return state.desafios[key]
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddDesafio))
