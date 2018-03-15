import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import Card from '../../compSimples/card'
import FormButton from '../../compSimples/form/formButton'
import { logaUser } from '../../../actions'
import './login.css'


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

                    user.type === 'professor' ? (
                        <Main>
                            <ContainerBox>
                                <h1 className="login__title">Bem-vindo(a)!</h1>

                                <FormButton
                                    className="card-button"
                                    type="submit">

                                    {/* CRIAR NEW CARD  */}
                                    <Card className="">
                                        {/* Card de seleciona escolas */}
                                        {escola}

                                    </Card>
                                </FormButton>


                            </ContainerBox>
                        </Main>
                    ) : (
                            <Main>
                                <ContainerBox>
                                    <h1 className="login__title">Olá Fulana!</h1>
                                    {/* <h1 className="login__title">Olá {user.nome}!</h1> */}

                                    <h3>Você tem:</h3>
                                    <h2>23 pts</h2>
                                    {/* <h2>{user.points} pts</h2>1 */}

                                    <FormButton
                                        className="card-button"
                                        type="submit">

                                        <Card className="">
                                            {/* Card de desafios */}
                                            {desafio}
                                        </Card>
                                    </FormButton>


                                </ContainerBox>
                            </Main>
                        )
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