import { getCards, postCard } from '../api'

export const LISTA_CARDS = 'LISTA_CARDS'
export const ADD_CARD = 'ADD_CARD'
export const EDIT_CARD = 'EDIT_CARD'

export function listaCards() {
    return dispatch => {
        getCards()
            .then(response => dispatch({
                type: LISTA_CARDS, 
                lista: response.data.cards
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function addCard(nomeCard) {
    return dispatch => {
        postCard(nomeCard)
            .then(response => dispatch({
                type: ADD_CARD, 
                nomeCard, 
                posicao: response.data.posicao
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function editCard(posicao) {
    return {
        type: EDIT_CARD,
        posicao
    }
}