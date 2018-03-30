
import { getDisciplina } from '../api'

export const LISTA_DISCIPLINAS = 'LISTA_DISCIPLINAS'


export function listaDisciplinas() {
    return dispatch => {
        getDisciplina()
            .then(response => {
                dispatch({
                    type: LISTA_DISCIPLINAS,
                    disciplinas: response.data
                    // {
                    //     ...disciplinas,
                    //     id: response.data.id
                    // }
                })
            })
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}
