import { push } from 'react-router-redux'
import { getTurmas, postTurma, getTurmasDesafios } from '../api'

export const CADASTRA_TURMA = 'CADASTRA_TURMA'
export const LISTA_TURMAS = 'LISTA_TURMAS'
export const LISTA_TURMAS_DESAFIOS = 'LISTA_TURMAS_DESAFIOS'

export function listaTurmas() {
    return dispatch => {
        getTurmas()
            .then(response => dispatch({
                type: LISTA_TURMAS,
                turmas: response.data
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function cadastraTurma(turma) {
    return dispatch => {
        postTurma(turma)
            .then(response => {
                dispatch({
                    type: CADASTRA_TURMA,
                    turma: {
                        ...turma,
                        id: response.data.id
                    }
                })
                dispatch(push(`/escolas/${response.data.id}/cadastro-alunos`))
            })
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function listaTurmasDesafios() {
    return dispatch => {
        getTurmasDesafios()
            .then(response => dispatch({
                type: LISTA_TURMAS_DESAFIOS,
                turmas: response.data,
                desafios: response.data,
                // turmasDesafios: response.data
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

// export function editTurma(posicao) {
//     return {
//         type: EDIT_TURMA,
//         posicao
//     }
// }
