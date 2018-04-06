



import { PEGA_PONTUACAO_ALUNO } from "../actions";


export function pontuacao(estadoAtual={}, acao) {

    switch (acao.type) {
        case PEGA_PONTUACAO_ALUNO:
            let novoEstado = {};

            novoEstado[acao.pontuacao.idAluno] = acao.pontuacao
            

            return novoEstado
        default:
            return estadoAtual
    }
}

