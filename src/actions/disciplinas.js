
import { getDisciplina } from '../api'

export const LISTA_DISCIPLINAS = 'LISTA_DISCIPLINAS'


export function listaDisciplinas(disciplina) {
    return dispatch => {
        dispatch({
            type: LISTA_DISCIPLINAS,
            disciplina: {
                ...disciplina,
                id: 3
            }
        })

        // getDisciplina(disciplina)
        //     .then(response => {
        //         dispatch({
        //             type: LISTA_DISCIPLINAS,
        //             disciplina: {
        //                 ...disciplina,
        //                 id: response.data.id
        //             }
        //         })
        //     })
        //     .catch(error => {
        //         console.log('Ocorreu um erro', error)
        //     })
    }
}