import { postRespostas } from '../api'

export const ADD_RESPOSTAS = 'ADD_RESPOSTAS'

export function mandaRespostas(respostas) {
    return dispatch => {
        postRespostas(respostas)
            .then(response => dispatch({
                type: ADD_RESPOSTAS,
                resposta: response.data
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}