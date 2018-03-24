const estadoInicial = {
    1: {
        id: 1,
        nome: 'Danielle',
        sobrenome: 'Nakatsu',
        email: 'daninaomi93@gmail.com'

    },
    2: {
        id: 2,
        nome: 'Camila',
        sobrenome: 'Belo',
        email: 'camilabelo@gmail.com'

    }
}

export function alunos(estadoAtual = estadoInicial, acao) {

    switch (acao.type) {
        default:
            return estadoAtual
    }
}

