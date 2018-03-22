import { CADASTRA_TURMA } from "../actions";


const estadoInicial = {
    0: {
        id: 0,
        nome: '6º A',
        desafios: [0,1]
    },
    1: {
        id: 1,
        nome: '6º B',
        desafios: [0]
    }
    
}

export function turmas(estadoAtual = estadoInicial, acao) {

    switch (acao.type) {
        case CADASTRA_TURMA:
            return {
                ...estadoAtual,
                ...acao.turma
                // [acao.escola.id]: acao.escola
            }
        default:
            return estadoAtual
    }
}



