import { getPerguntas, postRespostas } from '../api'

export const ADD_PERGUNTAS = 'ADD_PERGUNTAS'

export function addPerguntas() {
    return dispatch => {
        getPerguntas()
            .then(response => dispatch({
                type: ADD_PERGUNTAS
                // desafio: response.data
            }))
            .catch((response, error) => {
                if (error.response.code === 400) {
                    error: error.response.mensagem
                } else if (error.response.code === 500) {
                    error: "Ocorreu um erro inesperado"
                }
            })
    }
}