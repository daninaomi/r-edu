import { CADASTRA_TURMA } from "../actions";


const estadoInicial = {
    0: {
        id: 0,
        nome: '6º A',
        desafios: [0,1],
        alunos: [0,1,2,3,4]
    },
    1: {
        id: 1,
        nome: '6º B',
        desafios: [0],
        alunos: [0,1,2,3]
    }
    
}

export function turmas(estadoAtual = estadoInicial, acao) {

    switch (acao.type) {
        case CADASTRA_TURMA:
            return {
                ...estadoAtual,
                [acao.turma.id]: acao.turma
            }
        default:
            return estadoAtual
    }
}



