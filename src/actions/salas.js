import { push } from 'react-router-redux'

export const CADASTRA_SALA = 'CADASTRA_SALA'
// export const EDIT_SALA = 'EDIT_SALA'


export function cadastraSala(sala) {
    return dispatch => {
        dispatch({
            type: CADASTRA_SALA,
            sala: {
                ...sala,
                id: 6
            }
        })

        dispatch(push(`/salas/6/cadastro-alunos`))

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
