import { push } from 'react-router-redux'
import { postTurma } from '../api'

export const CADASTRA_ALUNOS = 'CADASTRA_ALUNOS'


export function cadastraAlunos(alunos, turma) {
    return dispatch => {
        dispatch({
            type: CADASTRA_ALUNOS,
            alunos: {
                ...alunos
            },
            turma
        })

        dispatch(push(`/escolas/${turma.idEscola}`))

        // postTurma(alunos)
        //     .then(response => {
        //         dispatch({
        //             type: CADASTRA_ALUNOS,
        //             alunos: {
        //                 ...alunos,
        //                 id: response.data.id
        //             }
        //         })
        //         dispatch(push(`/turmas/${response.data.id}`))
        //     })
        //     .catch(error => {
        //         console.log('Ocorreu um erro', error)
        //     })
    }
}