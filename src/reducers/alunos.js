
import {
    CADASTRA_ALUNOS
} from "../actions";
import Card from '../components/card'


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
            const novaTurma = new Card(acao.posicao, acao.nome)
            return {
                // ...estadoAtual,
                [acao.alunos]: alunos,
                ...estadoAtual.concat(novaTurma)
            }
        default:
            return estadoAtual
    }
}

