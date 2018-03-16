

const estadoInicial = {
    0: {
        id: 0,
        ano: '1º ano',
        denominacao: 'Front-end'
    },
    1: {
        id: 1,
        ano: '1º ano',
        denominacao: 'Back-end'
    }
}

export function salas(estadoAtual = estadoInicial, acao) {

    switch (acao.type) {

        default:
            return estadoAtual
    }
}



