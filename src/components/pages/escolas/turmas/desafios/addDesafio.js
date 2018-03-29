import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Main from '../../../../compSimples/main'
import ContainerBox from '../../../../compSimples/container-box'
import Card from '../../../../card'
import { listaDesafios } from '../../../../actions'
// import './cadastro-desafio.css'
import FaUserPlus from 'react-icons/lib/fa/user-plus'


class AddDesafio extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: false }
    }

    componentWillReceiveProps(nextProps) {
        this.props.dispatchListaDesafios()
    }

    render() {

        const { desafio, cadastraDesafio } = this.props

        return (
            <Main>
                <ContainerBox >
                    <h1 className="cadastro__title">{this.props.desafio.nome}</h1>

                        {this.props.desafios.map(desafio => (
                            <Card className="desafios__card" >
                                <h2 className="desafios__card-title">{desafio.nome}</h2>
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

    const id = props.match.params.id // const id = 0
    const turma = state.turmas[id]
    const desafios = turma.desafios

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


export default withRouter(connect(mapStateToProps)(AddDesafio))
