import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import HomeProf from './homeProf'
// import HomeAluno from './homeAluno'
import { deslogaUser } from '../../../actions'
// import './login.css'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: false }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()

        this.props.history.push('/addTurma')

    }

    render() {

        const { user, logaUser } = this.props

        return (
            !user.logado ? (

                < Redirect to="/login" />

            ) : (

                    // user.type === 'professor' ? (
                        <HomeProf />
                    // ) : (
                    //     <HomeAluno />
                    // )
                )
        )
    }

}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    deslogaUser: (event, user) => {
        event.preventDefault()
        dispatch(deslogaUser(user))
    }
})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))