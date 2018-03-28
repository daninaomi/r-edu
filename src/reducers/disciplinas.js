import { LISTA_DISCIPLINAS } from "../actions";

const estadoInicial = {
    0: {
        id: 0,
        nome: 'Física'
    },
    1: {
        id: 1,
        nome: 'Matemática'
    },
    3: {
        id: 3,
        nome: 'Química'
    }
}

export function disciplinas(estadoAtual = estadoInicial, acao) {

    switch (acao.type) {
        case LISTA_DISCIPLINAS:
            return {
                ...estadoAtual,
                ...acao.disciplina
            }
        default:
            return estadoAtual
    }
}
