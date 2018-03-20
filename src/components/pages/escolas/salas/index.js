import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import SalaDesafios from './desafios'
// import SalaAlunos from './alunos'
// import SalaGrupos from './grupos'

// import { addDesafio } from '../../../../actions'
// import './escola.css'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'



class Sala extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatchPushPage(this.props.sala.nome)
    }

    render() {

        return (
            <React.Fragment>
                
                <SalaDesafios/>
                {/* <SalaAlunos/> */}
                {/* <SalaGrupos/> */}

            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, props) => {

    const id = props.match.params.id
    const sala = state.salas[id]
    const desafios = sala.desafios

    return {
        sala,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Sala))

