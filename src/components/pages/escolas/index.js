import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Card from '../../card'
import { pushPage, listaTurmas,listaAulas } from '../../../actions'
import './escola.css'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'



class Escola extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.escola && nextProps.escola.nome) {
            this.props.dispatchPushPage(nextProps.escola.nome)
        }
    }

    componentDidMount() {
        this.props.dispatchListaTurmas()
        this.props.dispatchListaAulas()
    }

    render() {

        const { turmas, escola } = this.props

        return (

            <Main className="escolas__main">

                <ContainerBox className="escolas__container">

                    {this.props.turmas && this.props.turmas.map(turma => (
                        <Link className="escolas__card" to={`/turmas/${turma.id}`}>
                            <Card >
                                <h2 className="escolas__card-title">
                                    {turma.nome}
                                </h2>
                            </Card>
                        </Link>
                    ))}

                    {this.props.escola && 
                    <Link className="escolas__card escolas__card-icon" to={`/escolas/${this.props.escola.id}/cadastro-turmas`}>
                        <Card>
                            <FaPlusCircle className="escolas__icon" />
                        </Card>
                    </Link>
                    }

                </ContainerBox>
            </Main>
        )
    }
}

const mapStateToProps = (state, props) => {

    const id = props.match.params.id // const id = 0
    const escola = state.escolas[id]
    const turmas = state.turmas // const turmas = [0, 1]

    return {
        escola,
        turmas: Object.keys(state.turmas).map(key => {
            return state.turmas[key]
        })
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchListaAulas: () => {
        dispatch(listaAulas())
    },
    dispatchListaTurmas: () => {
        dispatch(listaTurmas())
    },
    dispatchPushPage: page => {
        dispatch(pushPage(page))
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Escola))

