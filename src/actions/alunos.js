import { push } from 'react-router-redux'
import { getAlunos, postTurmaAluno } from '../api'

export const CADASTRA_TURMA_ALUNO = 'CADASTRA_TURMA_ALUNO'
export const LISTA_ALUNOS = 'LISTA_ALUNOS'


export function listaAlunos() {
    return dispatch => {
        getAlunos()
            .then(response => dispatch({
                type: LISTA_ALUNOS, 
                alunos: response.data
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}

export function cadastraTurmaAluno(alunos, turma) {
    return dispatch => {

        postTurmaAluno(alunos, turma)
        
            .then(response => {
                dispatch({
                    type: CADASTRA_TURMA_ALUNO,
                    turmaAluno: response
                })
                dispatch(push(`/escolas/${turma.idEscola}`))
            })
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })


    }
}