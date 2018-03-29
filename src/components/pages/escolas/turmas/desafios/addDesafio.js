import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Main from '../../../../compSimples/main'
import ContainerBox from '../../../../compSimples/container-box'
import Card from '../../../../card'
import { listaDesafios, listaTurmas } from '../../../../../actions'
// import './cadastro-desafio.css'
import FaUserPlus from 'react-icons/lib/fa/user-plus'


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

        const { desafios } = this.props

        return (
            <Main>
                <ContainerBox >

                      <h1 className="cadastro__title">Escolha um desafio</h1>

                        {this.props.desafios && this.props.desafios.map(desafio => (
                            <Card className="desafios__card" >
                                <h2 className="desafios__card-title">{desafios.nome}</h2>
                                <Link to={`/cadastra-desafio-2`}>
                                        <FaUserPlus />
                                </Link>
                            </Card>
                        ))}

                </ContainerBox>
            </Main>
        )
    }
}

const mapStateToProps = (state, props) => {

    // const id = props.match.params.id
    // const turmas = state.turmas[id]
    // const desafios = turmas.desafios

    return {
        // turmas,
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
