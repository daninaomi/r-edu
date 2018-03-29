import { getDesafio, postDesafio } from '../api'

export const LISTA_DESAFIOS = 'LISTA_DESAFIOS'
export const CADASTRA_DESAFIO = 'CADASTRA_DESAFIO'

export function listaDesafios() {
    return dispatch => {
        getDesafio()
            .then(response => { 
                dispatch({
                type: LISTA_DESAFIOS,
                desafios: response.data
            })
        })
        
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function cadastraDesafio(desafio) {
    return dispatch => {
        postDesafio(desafio)
            .then(response => dispatch({
                type: CADASTRA_DESAFIO,
                desafio: response.data
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}