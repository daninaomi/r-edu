
import {
    CADASTRA_ALUNOS
} from "../actions";


const estadoInicial = {
    0: {
        id: 0,
        nome: 'Danielle',
        sobrenome: 'Nakatsu',
        email: 'daninaomi93@gmail.com'

    },
    1: {
        id: 1,
        nome: 'Camila',
        sobrenome: 'Belo',
        email: 'camilabelo@gmail.com'

    }
}

export function alunos(estadoAtual = estadoInicial, acao) {

    switch (acao.type) {

        case CADASTRA_ALUNOS:
            return {
                ...estadoAtual,
                [acao.alunos]: alunos
            }
        default:
            return estadoAtual
    }
}

