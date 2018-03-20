
import {
    CADASTRA_ALUNOS
} from "../actions";


const estadoInicial = {
    0: {
        id: 0,
        nome: 'Danielle',
        sobrenome: 'Nakatsu',
        cpf: '38387676543'

    },
    1: {
        id: 1,
        nome: 'Camila',
        sobrenome: 'Belo',
        cpf: '21337676543'

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

