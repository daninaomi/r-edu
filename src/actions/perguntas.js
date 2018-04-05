import { getPerguntas, postRespostas } from '../api'

export const LISTA_PERGUNTAS = 'LISTA_PERGUNTAS'

export function listaPerguntas() {
    return dispatch => {
        getPerguntas()
            .then(response => dispatch({
                type: LISTA_PERGUNTAS,
                perguntas: response.data
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}
