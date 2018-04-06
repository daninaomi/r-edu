
import { getEscolas } from '../api'

export const LISTA_ESCOLAS = 'LISTA_ESCOLAS'


export function listaEscolas() {
    return dispatch => {
        getEscolas()
            .then(response => dispatch({
                type: LISTA_ESCOLAS, 
                escolas: response.data
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}