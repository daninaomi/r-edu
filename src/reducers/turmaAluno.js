
import {
    CADASTRA_TURMA_ALUNO
} from "../actions";


export function turmaAluno(estadoAtual = {} , acao) {
    // console.log('action turma aluno', acao)
    switch (acao.type) {

        case CADASTRA_TURMA_ALUNO:
            return {
                ...estadoAtual,
                [acao.turmaAluno.idTurmasAluno]: acao.turmasAlunos
            }
        default:
            return estadoAtual
    }
}

