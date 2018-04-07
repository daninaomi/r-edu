import { getPontuacao } from '../api'

export const PEGA_PONTUACAO_ALUNO = 'PEGAR_PONTUACAO_ALUNO'

export function pontuacao(user) {
    return dispatch => {
        getPontuacao(user)
            .then(response => dispatch({
                type: PEGA_PONTUACAO_ALUNO,
                pontuacao: response.data
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}
