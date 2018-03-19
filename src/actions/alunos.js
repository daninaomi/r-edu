// import { push } from 'react-router-redux'
import { postSala } from '../api'

export const PEGA_LISTA = 'PEGA_LISTA'
export const FILTRA_LISTA = 'FILTRA_LISTA'
export const CADASTRA_ALUNOS = 'CADASTRA_ALUNOS'


export function pegaListaAlunos({alunos, sala, listaAlunos}) {
    return {
        type: PEGA_LISTA,
        sala,
        listaAlunos: listaAlunos[alunos]
    }
}

export function filtraAlunos(alunos) {
    return {
        type: FILTRA_LISTA,
        alunos
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