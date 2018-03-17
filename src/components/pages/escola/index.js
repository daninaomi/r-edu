import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Card from '../../card'
import { addturma } from '../../../actions'
import './escola.css'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'



class Escola extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (

            <Main className="escolas__main">

                <ContainerBox className="escolas__container">

                    {this.props.salas.map(sala => (
                        <Link className="escolas__card" to={`/salas/${sala.id}`}>
                            <Card >
                                <h2 className="escolas__card-title">
                                    {sala.ano}
                                </h2>
                                <h2 className="escolas__card-title">
                                    {sala.denominacao}
                                </h2>
                            </Card>
                        </Link>
                    ))}

                    <Link className="escolas__card escolas__card-icon" to={`/escolas/${this.props.escola.id}/cadastro-salas`}>
                        <Card>
                            <FaPlusCircle className="escolas__icon" />
                        </Card>
                    </Link>

                </ContainerBox>
            </Main>
        )
    }
}

const mapStateToProps = (state, props) => {
    
    const id = props.match.params.id // const id = 0
    const escola = state.escolas[id]
    const salas = escola.salas // const salas = [0, 1]

    return {
        escola,
        salas: salas.map(sala => { // sala = 1 [{...}, {....}]
            return state.salas[sala];
        })
    }
}

export default withRouter(connect(mapStateToProps)(Escola))

