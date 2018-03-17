import { push } from 'react-router-redux'

import { postSala } from '../api'

export const CADASTRA_SALA = 'CADASTRA_SALA'
// export const ADD_SALA = "ADD_SALA"
// export const EDIT_SALA = 'EDIT_SALA'


// export function addSala(sala) {
//     return {
//         type: ADD_SALA,
//         sala
//     }
// }

export function cadastraSala(sala) {
    return dispatch => {
        dispatch({
            type: CADASTRA_SALA,
            sala: {
                ...sala,
                id: 5
            }
        })

        dispatch(push(`/salas/5/cadastro-alunos`))

        // postSala(sala)
        //     .then(response => {
        //         dispatch({
        //             type: CADASTRA_SALA,
        //             sala: {
        //                 ...sala,
        //                 id: response.data.id
        //             }
        //         })
        //         dispatch(push(`/salas/${response.data.id}/cadastro-alunos`))
        //     })
        //     .catch(error => {
        //         console.log('Ocorreu um erro', error)
        //     })
    }
}

// export function editSala(posicao) {
//     return {
//         type: EDIT_SALA,
//         posicao
//     }
// }





// alunos: response.data