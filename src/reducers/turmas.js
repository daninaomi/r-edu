import { CADASTRA_TURMA } from "../actions";


const estadoInicial = {
    0: {
        id: 0,
        sala: '6º A'
    },
    1: {
        id: 1,
        sala: '6º B'
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



