import { push } from 'react-router-redux'
import { getAulas, postAula, getBuscaAula } from '../api'

export const CADASTRA_AULA = 'CADASTRA_AULA'
export const LISTA_AULAS = 'LISTA_AULAS'
export const BUSCA_AULA = 'BUSCA_AULA'

export function listaAulas() {
    return dispatch => {
        getAulas()
            .then(response => dispatch({
                type: LISTA_AULAS,
                aulas: response.data
            }))
        .catch(error => {
            console.log('Ocorreu um erro', error)
        })
    }
}

export function buscaAula(aula) {
    return dispatch => {
        getBuscaAula(aula)
            .then(response => dispatch({
                type: BUSCA_AULA,
                aula: response.data
            }))
        .catch(error => {
            console.log('Ocorreu um erro', error)
        })
    }
}

export function cadastraAula(aula) {
    return dispatch => {
        postAula(aula)
            .then(response => {
                dispatch({
                    type: CADASTRA_AULA,
                    aula: {
                        ...aula,
                        id: response.data.id
                    }
                })
                dispatch(push(`/turmas/${response.data.idTurma}/aula/${response.data.id}`))
            })
        .catch(error => {
            console.log('Ocorreu um erro', error)
        })
    }
}
