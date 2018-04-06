import { getPontuacao } from '../api'

export const PEGA_PONTUACAO_ALUNO = 'PEGAR_PONTUACAO_ALUNO'

export function pontuacao(aluno) {
    return dispatch => {
        getPontuacao(aluno)
            .then(response => dispatch({
                type: PEGA_PONTUACAO_ALUNO,
                pontuacao: response.data
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}
