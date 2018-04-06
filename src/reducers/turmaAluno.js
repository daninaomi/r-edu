
import {
    CADASTRA_TURMA_ALUNO,
    LISTA_TURMAS_ALUNOS
} from "../actions";


export function turmaAluno(estadoAtual = {} , acao) {

    switch (acao.type) {
        case CADASTRA_TURMA_ALUNO:
            return {
                ...estadoAtual,
                ...acao.turmaAluno
            }

        case LISTA_TURMAS_ALUNOS:
            let novoEstado = {};

            novoEstado[acao.turmasAlunos.id] = acao.turmasAlunos

            return novoEstado

        default:
            return estadoAtual
    }
}
