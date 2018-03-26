import { ADD_DESAFIO } from "../actions";

const estadoInicial = {
    0: {
        id: 0,
        nome: 'Foguete'
    },
    1: {
        id: 1,
        nome: 'Vulcão'
    },
    3: {
        id: 3,
        nome: 'Jardim'
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
