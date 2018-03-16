import { postSala } from '../api'

export const ADD_SALA = 'ADD_SALA'
export const EDIT_SALA = 'EDIT_SALA'


export function addSala({escola, ano, denominacao,}) {
    return dispatch => {
        postSala({escola, ano, denominacao,})
            .then(response => dispatch({
                type: ADD_SALA, 
                escola,
                ano,
                denominacao, 
                posicao: response.data.posicao
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function editSala(posicao) {
    return {
        type: EDIT_SALA,
        posicao
    }
}