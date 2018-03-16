import { postSala } from '../api'

export const CADASTRA_SALA = 'CADASTRA_SALA'
export const ADD_SALA = "ADD_SALA"
// export const EDIT_SALA = 'EDIT_SALA'


export function addSala(sala) {
    return {
        type: ADD_SALA,
        sala
    }
}

export function cadastraSala(sala) {
    return dispatch => {
        postSala(sala)
            .then(response => dispatch({
                type: CADASTRA_SALA, 
                // escola,
                ano: response.data,
                denominacao: response.data, 
                posicao: response.data.posicao
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

// export function editSala(posicao) {
//     return {
//         type: EDIT_SALA,
//         posicao
//     }
// }