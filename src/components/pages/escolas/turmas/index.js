import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import TurmaDesafios from './desafios'
// import TurmaAlunos from './alunos'
// import TurmaGrupos from './grupos'

import { addDesafio, pushPage } from '../../../../actions'
// import './escola.css'
import FaPlusCircle from 'react-icons/lib/fa/plus-circle'



class Turma extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatchPushPage(this.props.turma.nome)
    }

    render() {

        return (
            <React.Fragment>
                
                <TurmaDesafios/>
                {/* <TurmaAlunos/> */}
                {/* <TurmaGrupos/> */}

            </React.Fragment>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    dispatchPushPage: page => {
        dispatch(pushPage(page))
    }
    
})

export default withRouter(connect(mapDispatchToProps)(Turma))
