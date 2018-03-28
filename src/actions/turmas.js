import { push } from 'react-router-redux'
import {postTurma} from '../api'

export const CADASTRA_TURMA = 'CADASTRA_TURMA'


export function cadastraTurma(turma) {
    return dispatch => {
        // dispatch({
        //     type: CADASTRA_TURMA,
        //     turma: {
        //         ...turma,
        //         id: 3
        //     }
        // })

        // dispatch(push(`/escolas/${turma.idEscola}/cadastro-alunos`))

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

// export function editTurma(posicao) {
//     return {
//         type: EDIT_TURMA,
//         posicao
//     }
// }
