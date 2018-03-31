
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

            // acao.turmas.forEach(turma => (
            //     novoEstado[turma.id] = turma
            // ))
            // acao.desafios.forEach(desafio => (
            //     novoEstado[desafio.id] = desafio
            // ))
            acao.turmasAlunos.forEach((turmasAlunos) => (
                novoEstado[turmasAlunos.id] = turmasAlunos
            ))

            return novoEstado
        default:
            return estadoAtual
    }
}

