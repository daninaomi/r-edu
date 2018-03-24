import { push } from 'react-router-redux'
import { postTurmaAluno } from '../api'

export const CADASTRA_TURMA_ALUNO = 'CADASTRA_TURMA_ALUNO'


export function cadastraTurmaAluno(alunos, turma) {
    return dispatch => {
        // dispatch({
        //     type: CADASTRA_ALUNOS,
        //     alunos: {
        //         ...alunos
        //     },
        //     turma
        // })

        // dispatch(push(`/escolas/${turmas.idEscola}`))

        postTurmaAluno(alunos, turma)
        
            .then(response => {
                console.log('response', response)
                dispatch({
                    type: CADASTRA_TURMA_ALUNO,
                    turmaAluno: response.data
                })
                dispatch(push(`/escolas/${turma.idEscola}`))
            })
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })


    }
}