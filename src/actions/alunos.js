// import { push } from 'react-router-redux'
import { postSala } from '../api'

export const PEGA_LISTA = 'PEGA_LISTA'
export const FILTRA_LISTA = 'FILTRA_LISTA'
export const CADASTRA_ALUNOS = 'CADASTRA_ALUNOS'


// export function pegaListaAlunos({ alunos, sala, listaAlunos }) {
//     return {
//         type: PEGA_LISTA,
//         sala,
//         listaAlunos: listaAlunos[alunos]
//     }
// }

export function pegaListaAlunos(alunos) {
    return dispatch => {
        dispatch({
            type: PEGA_LISTA
        })
    }
}

export function filtraAlunos(listaAlunos) {
    return dispatch => {
        dispatch({
            type: FILTRA_LISTA,
            listaAlunos
        })
    }
}

export function cadastraAlunos(alunos) {
    return dispatch => {
        dispatch({
            type: CADASTRA_ALUNOS,
            // alunos: {
            //     ...alunos
            // ,id: 0
            // }
        })

        // postSala(alunos)
        //     .then(response => {
        //         dispatch({
        //             type: CADASTRA_ALUNOS,
        //             alunos: {
        //                 ...alunos,
        //                 id: response.data.id
        //             }
        //         })
        //         dispatch(push(`/salas/${response.data.id}`))
        //     })
        //     .catch(error => {
        //         console.log('Ocorreu um erro', error)
        //     })
    }
}