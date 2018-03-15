import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import Main from '../../compSimples/main'
import ContainerBox from '../../compSimples/container-box'
import FormButton from '../../compSimples/form/formButton'
import Card from '../../card'


function HomeProf(cardAtual) {


    let cardCopiado = new Card(cardAtual.posicao, cardAtual.nomeCard)

    return (
        <Main>
            <ContainerBox>
                <h1 className="login__title">Bem-vindo(a)!</h1>

                <FormButton
                    className="card-button"
                    type="submit">

                    {/* <Card className="">
                            Card de seleciona escolas *
                            {escola}
                        </Card> */}

                    {cardCopiado}

                </FormButton>


            </ContainerBox>
        </Main>
    )
}

}


const mapStateToProps = state => ({
    card: state.card
})

const mapDispatchToProps = dispatch => ({
    listaCards: (event, card) => {
        event.preventDefault()
        dispatch(listaCards(card))
    }
})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeProf))