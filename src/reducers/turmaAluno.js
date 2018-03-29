
import {
    CADASTRA_TURMA_ALUNO
} from "../actions";


export function turmaAluno(estadoAtual = {} , acao) {
    
    switch (acao.type) {
        case CADASTRA_TURMA_ALUNO:
            return {
                ...estadoAtual,
                ...acao.turmaAluno
            }
        default:
            return estadoAtual
    }
}

