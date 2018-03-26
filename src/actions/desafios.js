import { getDesafio } from '../api'

export const ADD_DESAFIO = 'ADD_DESAFIO'

export function addDesafio() {
    return dispatch => {
        getDesafio()
            .then(response => dispatch({
                type: ADD_DESAFIO
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