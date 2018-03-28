import { ADD_DESAFIO } from "../actions";

const estadoInicial = {
    0: {
        id: 0,
        nome: 'Foguete',
        disciplinas: [0,1]
    },
    1: {
        id: 1,
        nome: 'Vulcão',
        disciplinas: []
    },
    3: {
        id: 3,
        nome: 'Jardim',
        disciplinas: []
    }
    // },
    // 4: {
    //     id: 4,
    //     nome: 'Camera'
    // }
}

export function desafios(estadoAtual = estadoInicial, acao) {

    switch (acao.type) {
        case ADD_DESAFIO:
            return {
                ...estadoAtual,
                ...acao.desafio
            }
        default:
            return estadoAtual
    }
}
